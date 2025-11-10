import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { db } from '../lib/firebase';
import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

type FavoriteItem = {
  id: string;
  name: string;
  url: string;
  icon: string;
  category: string;
  isPinned?: boolean;
  lastVisited?: Date;
  visitCount?: number;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
};

type FavoritesContextType = {
  favorites: FavoriteItem[];
  categories: string[];
  tags: string[];
  addFavorite: (item: Omit<FavoriteItem, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateFavorite: (id: string, updates: Partial<FavoriteItem>) => Promise<void>;
  removeFavorite: (id: string) => Promise<void>;
  togglePin: (id: string) => void;
  getFavoritesByCategory: (category: string) => FavoriteItem[];
  getFavoritesByTag: (tag: string) => FavoriteItem[];
  getPinnedFavorites: () => FavoriteItem[];
  getRecentFavorites: (limit?: number) => FavoriteItem[];
  addCategory: (category: string) => void;
  addTag: (tag: string) => void;
  syncFavorites: () => Promise<void>;
  isSyncing: boolean;
  lastSync: Date | null;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const EnhancedFavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSync, setLastSync] = useState<Date | null>(null);

  // Charger les favoris depuis le stockage local
  useEffect(() => {
    const loadLocalFavorites = () => {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
      
      const savedCategories = localStorage.getItem('favoriteCategories');
      if (savedCategories) {
        setCategories(JSON.parse(savedCategories));
      }
      
      const savedTags = localStorage.getItem('favoriteTags');
      if (savedTags) {
        setTags(JSON.parse(savedTags));
      }
    };

    loadLocalFavorites();
  }, []);

  // Synchroniser avec Firestore si l'utilisateur est connecté
  const syncWithFirestore = useCallback(async () => {
    if (!user) return;
    
    setIsSyncing(true);
    try {
      const userRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userRef);
      
      if (userDoc.exists()) {
        // Fusionner les favoris locaux et distants
        const remoteData = userDoc.data();
        const mergedFavorites = mergeFavorites(favorites, remoteData.favorites || []);
        const mergedCategories = Array.from(new Set([...categories, ...(remoteData.categories || [])]));
        const mergedTags = Array.from(new Set([...tags, ...(remoteData.tags || [])]));
        
        setFavorites(mergedFavorites);
        setCategories(mergedCategories);
        setTags(mergedTags);
        
        // Mettre à jour Firestore avec les données fusionnées
        await updateDoc(userRef, {
          favorites: mergedFavorites,
          categories: mergedCategories,
          tags: mergedTags,
          lastSynced: new Date().toISOString()
        });
      } else {
        // Créer un nouveau document utilisateur
        await setDoc(userRef, {
          favorites,
          categories,
          tags,
          lastSynced: new Date().toISOString()
        });
      }
      
      setLastSync(new Date());
    } catch (error) {
      console.error('Erreur lors de la synchronisation avec Firestore:', error);
    } finally {
      setIsSyncing(false);
    }
  }, [user, favorites, categories, tags]);

  // Fonction utilitaire pour fusionner les favoris
  const mergeFavorites = (local: FavoriteItem[], remote: FavoriteItem[]): FavoriteItem[] => {
    const merged = [...local];
    const localIds = new Set(local.map(f => f.id));
    
    remote.forEach(remoteItem => {
      if (!localIds.has(remoteItem.id)) {
        merged.push({
          ...remoteItem,
          // Convertir les timestamps Firestore en objets Date
          createdAt: remoteItem.createdAt instanceof Date ? remoteItem.createdAt : new Date(remoteItem.createdAt),
          updatedAt: remoteItem.updatedAt instanceof Date ? remoteItem.updatedAt : new Date(remoteItem.updatedAt)
        });
      }
    });
    
    return merged;
  };

  // Ajouter un favori
  const addFavorite = async (item: Omit<FavoriteItem, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newFavorite: FavoriteItem = {
      ...item,
      id: generateId(),
      isPinned: false,
      visitCount: 0,
      tags: item.tags || [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    setFavorites(prev => {
      const updated = [...prev, newFavorite];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
    
    // Mettre à jour les catégories et tags si nécessaire
    if (!categories.includes(item.category)) {
      const newCategories = [...categories, item.category];
      setCategories(newCategories);
      localStorage.setItem('favoriteCategories', JSON.stringify(newCategories));
    }
    
    if (item.tags) {
      const newTags = Array.from(new Set([...tags, ...item.tags]));
      if (newTags.length > tags.length) {
        setTags(newTags);
        localStorage.setItem('favoriteTags', JSON.stringify(newTags));
      }
    }
    
    // Synchroniser avec Firestore si connecté
    if (user) {
      await syncWithFirestore();
    }
  };

  // Mettre à jour un favori
  const updateFavorite = async (id: string, updates: Partial<FavoriteItem>) => {
    setFavorites(prev => {
      const updated = prev.map(fav => 
        fav.id === id ? { ...fav, ...updates, updatedAt: new Date() } : fav
      );
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
    
    // Synchroniser avec Firestore si connecté
    if (user) {
      await syncWithFirestore();
    }
  };

  // Supprimer un favori
  const removeFavorite = async (id: string) => {
    setFavorites(prev => {
      const updated = prev.filter(fav => fav.id !== id);
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
    
    // Synchroniser avec Firestore si connecté
    if (user) {
      await syncWithFirestore();
    }
  };

  // Épingler/Désépingler un favori
  const togglePin = (id: string) => {
    setFavorites(prev => {
      const updated = prev.map(fav => 
        fav.id === id ? { ...fav, isPinned: !fav.isPinned, updatedAt: new Date() } : fav
      );
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  // Ajouter une catégorie
  const addCategory = (category: string) => {
    if (!categories.includes(category)) {
      const newCategories = [...categories, category];
      setCategories(newCategories);
      localStorage.setItem('favoriteCategories', JSON.stringify(newCategories));
    }
  };

  // Ajouter un tag
  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      const newTags = [...tags, tag];
      setTags(newTags);
      localStorage.setItem('favoriteTags', JSON.stringify(newTags));
    }
  };

  // Obtenir les favoris par catégorie
  const getFavoritesByCategory = (category: string) => {
    return favorites.filter(fav => fav.category === category);
  };

  // Obtenir les favoris par tag
  const getFavoritesByTag = (tag: string) => {
    return favorites.filter(fav => fav.tags?.includes(tag));
  };

  // Obtenir les favoris épinglés
  const getPinnedFavorites = () => {
    return favorites.filter(fav => fav.isPinned);
  };

  // Obtenir les favoris récents
  const getRecentFavorites = (limit: number = 5) => {
    return [...favorites]
      .sort((a, b) => (b.lastVisited?.getTime() || 0) - (a.lastVisited?.getTime() || 0))
      .slice(0, limit);
  };

  // Générer un ID unique
  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        categories,
        tags,
        addFavorite,
        updateFavorite,
        removeFavorite,
        togglePin,
        getFavoritesByCategory,
        getFavoritesByTag,
        getPinnedFavorites,
        getRecentFavorites,
        addCategory,
        addTag,
        syncFavorites: syncWithFirestore,
        isSyncing,
        lastSync
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useEnhancedFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useEnhancedFavorites must be used within an EnhancedFavoritesProvider');
  }
  return context;
};
