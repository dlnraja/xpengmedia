import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FavoritesGrid } from '../components/favorites/FavoritesGrid';
import { AddFavoriteModal } from '../components/favorites/AddFavoriteModal';
import { SearchBar } from '../components/SearchBar';
import { useFavorites } from '../context/FavoritesContext';
import { PlusIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

export const HomePage: React.FC = () => {
  const { categories } = useFavorites();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Gestion du défilement pour afficher le bouton de retour en haut
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Faire défiler vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <div className="container mx-auto px-4 py-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 rounded-2xl p-8 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white text-center">
            🚗 XPeng Media Hub
          </h1>
          <p className="text-blue-50 text-lg text-center">
            Votre portail de divertissement intelligent
          </p>
          <div className="mt-4 flex justify-center gap-3 text-sm text-blue-100">
            <span className="bg-white/20 px-3 py-1 rounded-full">🎬 Vidéos</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">🎵 Musique</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">🎮 Jeux</span>
          </div>
        </div>
      </motion.div>

      {/* Barre de recherche */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <SearchBar />
      </motion.div>

      {/* Bouton flottant d'ajout */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setSelectedCategory('');
          setIsAddModalOpen(true);
        }}
        className="fixed bottom-6 right-6 z-10 flex items-center justify-center w-14 h-14 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors md:hidden"
        aria-label="Ajouter un favori"
      >
        <PlusIcon className="h-6 w-6" />
      </motion.button>

      {/* Bouton de retour en haut */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-10 flex items-center justify-center w-12 h-12 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Retour en haut"
          >
            <ArrowUpIcon className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Bouton d'ajout pour desktop */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:block mb-8"
      >
        <button
          onClick={() => {
            setSelectedCategory('');
            setIsAddModalOpen(true);
          }}
          className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Ajouter un favori
        </button>
      </motion.div>

      {/* Afficher les favoris par catégorie */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-12"
      >
        <AnimatePresence>
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * (index % 3) }}
            >
              <FavoritesGrid
                category={category}
                onAddClick={() => {
                  setSelectedCategory(category);
                  setIsAddModalOpen(true);
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal d'ajout de favori */}
      <AddFavoriteModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        defaultCategory={selectedCategory}
      />
    </div>
  );
};
