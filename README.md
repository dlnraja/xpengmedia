<div align="center">

# 🚗 XPENG Media Hub 💙

### *Le centre multimédia intelligent pour votre XPENG*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-XPENG_Media_Hub-00D9FF?style=for-the-badge&logo=google-chrome&logoColor=white)](https://dlnraja.github.io/xpengmedia/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deployed-success?style=for-the-badge&logo=github)](https://dlnraja.github.io/xpengmedia/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

**[🚀 Démo en direct](https://dlnraja.github.io/xpengmedia/)** • **[📖 Documentation](#fonctionnalités)** • **[🐛 Signaler un bug](https://github.com/dlnraja/xpengmedia/issues)** • **[💡 Proposer une fonctionnalité](https://github.com/dlnraja/xpengmedia/issues)**

---

### 214 services • 10 langues • 20 régions • Mode clair/sombre • 100% responsive

![XPENG Media Hub](https://img.shields.io/badge/Status-Production-brightgreen?style=flat-square)
![Version](https://img.shields.io/badge/Version-2.0.0-blue?style=flat-square)
![Licence](https://img.shields.io/badge/Licence-MIT-yellow?style=flat-square)

</div>

---

## 📖 À propos

**XPENG Media Hub** est une application web moderne et élégante conçue pour centraliser l'accès à tous vos services de streaming, musique, jeux et autres contenus multimédias directement depuis le navigateur de votre véhicule XPENG.

Inspirée de l'interface **XPENG XOS**, cette application offre une expérience utilisateur fluide, intuitive et parfaitement optimisée pour les écrans tactiles automobiles (G6, G9, P7, P5).

### 🎯 Objectifs

- ✅ **Centralisation** : Tous vos services au même endroit
- ✅ **Simplicité** : Interface intuitive et rapide
- ✅ **Adaptabilité** : Contenu adapté à votre région
- ✅ **Performance** : Chargement ultra-rapide
- ✅ **Élégance** : Design moderne et cohérent XPENG

---

## ✨ Fonctionnalités principales

### 🌍 **Multi-régional et multilingue**
- **10 langues** : Anglais, Français, Allemand, Espagnol, Italien, Néerlandais, Suédois, Norvégien, Danois, Arabe, Hébreu, Chinois
- **Détection automatique** de la langue et région du navigateur
- **Filtrage intelligent** : Seuls les services disponibles dans votre région sont affichés

### 📺 **214 services organisés**
- **🎬 Vidéo** : Netflix, Prime Video, Disney+, YouTube, Crunchyroll, ADN, Bilibili, etc.
- **🎵 Musique** : Spotify, Apple Music, YouTube Music, Deezer, TIDAL, etc.
- **🎮 Jeux** : Steam, GeForce NOW, Xbox Cloud Gaming, etc.
- **🔋 Recharge** : ABRP, Chargemap, PlugShare, XPENG Supercharging
- **🌐 Services web** : Gmail, Drive, Outlook, WeChat, Weibo, etc.

### 🎨 **Design XPENG**
- **Thème clair/sombre** avec transition fluide
- **Gradients cyan/blue** signature XPENG
- **Icônes uniformes** avec design cohérent
- **Animations fluides** avec Framer Motion
- **Mode paysage optimisé** pour écran automobile

### 📱 **Responsive & Optimisé**
- **Portrait** : 5 colonnes, interface compacte
- **Paysage** : 8 colonnes, aucun scroll nécessaire
- **Mobile** : Touch-friendly, gestes intuitifs
- **Desktop** : Expérience complète avec hover effects

### ⭐ **Favoris intelligents**
- **AI-powered** : Apprentissage de vos habitudes
- **Personnalisation** : Ajout de services personnalisés
- **Synchronisation** : localStorage persistant

---

## 🛠️ Technologies utilisées

### **Frontend**
- **React 18.3** - Bibliothèque UI moderne
- **TypeScript 5.6** - Typage statique
- **Vite 7.0** - Build tool ultra-rapide
- **Tailwind CSS 3.4** - Styling utility-first

### **Libraries**
- **Framer Motion** - Animations fluides
- **React Router 7.0** - Navigation SPA
- **Heroicons** - Icônes SVG
- **Lucide React** - Icônes complémentaires

### **Outils**
- **ESLint** - Linting code
- **PostCSS** - Transformation CSS
- **gh-pages** - Déploiement automatique

---

## 🚀 Installation et développement

### **Prérequis**
- Node.js 18+ 
- npm ou yarn
- Git

### **Installation locale**

```bash
# 1. Cloner le dépôt
git clone https://github.com/dlnraja/xpengmedia.git
cd xpengmedia

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir dans le navigateur
# http://localhost:5173
```

### **Build production**

```bash
# Build optimisé
npm run build

# Prévisualiser le build
npm run preview

# Déployer sur GitHub Pages
npm run deploy
```

---

## 📂 Structure du projet

```
xpengmedia/
├── public/                  # Fichiers statiques
│   ├── icons/              # Icônes et documentation
│   └── README.md           # Doc système d'icônes
├── src/
│   ├── components/         # Composants React
│   │   ├── favorites/      # Gestion des favoris
│   │   ├── icons/          # Composants icônes (PlatformIcon)
│   │   ├── layout/         # Layout (Navbar, Footer)
│   │   ├── locale/         # Sélecteur de langue
│   │   ├── modals/         # Modales (AddCustomUrl)
│   │   ├── platforms/      # Cards services (EditablePlatformCard)
│   │   └── ui/             # Composants UI réutilisables
│   ├── context/            # React Context
│   │   ├── FavoritesContext.tsx
│   │   ├── LocaleContext.tsx
│   │   └── ThemeContext.tsx
│   ├── data/
│   │   └── platforms.ts    # 214 services organisés
│   ├── hooks/              # Custom hooks
│   │   └── useSmartFavorites.ts
│   ├── pages/              # Pages principales
│   │   └── HomePage.tsx
│   ├── App.tsx             # Composant racine
│   ├── main.tsx            # Point d'entrée
│   └── index.css           # Styles globaux
├── README.md               # Ce fichier
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

---

## 🌍 Régions et langues supportées

| Région | Drapeau | Langues | Services |
|--------|---------|---------|----------|
| **Global** | 🌍 | EN | 150+ universels |
| **France** | 🇫🇷 | FR | Global + Canal+, Molotov, ADN |
| **Deutschland** | 🇩🇪 | DE | Global + ZDF, ARD, Play Suisse |
| **Österreich** | 🇦🇹 | DE | Global + services AT |
| **Nederland** | 🇳🇱 | NL | Global + services NL |
| **België/Belgique** | 🇧🇪 | NL | Global + services BE |
| **España** | 🇪🇸 | ES | Global + services ES |
| **Italia** | 🇮🇹 | IT | Global + services IT |
| **Sverige** | 🇸🇪 | SV | Global + services SE |
| **Norge** | 🇳🇴 | NO | Global + services NO |
| **Danmark** | 🇩🇰 | DA | Global + services DK |
| **Schweiz/Suisse** | 🇨🇭 | DE | Global + Play Suisse |
| **United Kingdom** | 🇬🇧 | EN | Global + services UK |
| **United States** | 🇺🇸 | EN | Global + Hulu, Peacock, ESPN+ |
| **Australia** | 🇦🇺 | EN | Global + services AU |
| **中国 China** | 🇨🇳 | ZH | Global + Bilibili, iQIYI, Youku, WeChat |
| **Singapore** | 🇸🇬 | EN | Global + services SG |
| **UAE الإمارات** | 🇦🇪 | AR | Global + services ME |
| **Qatar قطر** | 🇶🇦 | AR | Global + services QA |
| **Israel ישראל** | 🇮🇱 | HE | Global + services IL |

---

## 📸 Captures d'écran

### Mode clair - Portrait
Interface compacte optimisée pour mobile avec 5 colonnes de services.

### Mode sombre - Paysage
8 colonnes visibles sans scroll, parfait pour l'écran XPENG G6.

### Sélecteur de région
Dropdown élégant avec overlay pour changer de pays/langue.

---

## 🗺️ Roadmap

### ✅ Version 2.0 (Actuelle)
- [x] 214 services disponibles
- [x] 10 langues complètes
- [x] Design XPENG uniforme
- [x] Mode paysage optimisé
- [x] Icônes uniformes avec gradients
- [x] Favoris intelligents avec AI
- [x] Services chinois (Bilibili, WeChat, Youku, etc.)
- [x] Services anime légaux (Crunchyroll, ADN, HIDIVE, Wakanim)

### 🔄 Version 2.1 (En cours)
- [ ] PWA (Progressive Web App)
- [ ] Mode hors-ligne
- [ ] Synchronisation cloud
- [ ] Historique d'utilisation
- [ ] Recommandations personnalisées avancées

### 🚀 Version 3.0 (Futur)
- [ ] Intégration API XPENG
- [ ] Commandes vocales
- [ ] Widgets personnalisables
- [ ] Partage de profils
- [ ] Mode multi-utilisateurs

---

## 📝 Changelog

### **v2.0.0** - 2025-01-12 ✨ Version majeure

#### 🆕 Nouvelles fonctionnalités
- **Système d'icônes uniforme** : PlatformIcon avec gradients XPENG (40/48/64px)
- **Bouton suppression agrandi** : 32x32px cliquable avec ring blanc
- **Mode paysage optimisé** : 8 colonnes, navbar compacte (h-12), textes réduits
- **7 nouvelles langues** : Italien, Néerlandais, Suédois, Norvégien, Danois, Arabe, Hébreu
- **6 services chinois** : Youku, Douyin, Mango TV, WeChat, Weibo, DingTalk
- **Services anime légaux** : HIDIVE, Wakanim ajoutés

#### 🔧 Corrections
- **Free TV+ remplace Oqee** : URL tv.free.fr, service actuel
- **Funimation supprimé** : Fusionné avec Crunchyroll
- **ADN URL corrigée** : Slash final retiré
- **3 doublons supprimés** : dazn → dazn-europe, apple-music, chargemap
- **9 URLs nettoyées** : Slash final inutile retiré

#### 🎨 Améliorations UI
- **Background bleuté** : Gradient cyan très clair style XPENG
- **Textes lisibles** : text-slate-900 → text-slate-800
- **Navbar optimisée** : Hauteur réduite en landscape (h-20 → h-12)
- **Grille favoris** : 5 cols portrait, 8 cols landscape
- **SearchBar compacte** : py-3 → py-1.5 en landscape
- **Icônes cohérentes** : Fond gradient + border cyan partout

#### 📊 Statistiques
- **Services totaux** : 214 (+7 nets)
- **Langues** : 10 complètes
- **Régions** : 20 zones couvertes
- **Catégories** : Vidéo, Musique, Jeux, Recharge, Services web

---

### **v1.5.0** - 2024-12-15

#### 🆕 Fonctionnalités
- Display toutes les sous-catégories avec design XPENG
- Sections avec gradients colorés personnalisés
- Boutons d'ajout de services et URLs personnalisées
- Mode édition pour gérer les services

#### 🔧 Corrections
- Z-index dropdown langue corrigé
- Responsive mobile/tablette/desktop amélioré
- Performance de chargement optimisée

---

### **v1.0.0** - 2024-11-01 🎉 Version initiale

#### 🚀 Lancement
- Application de base avec 150+ services
- Support 3 langues (EN, FR, DE)
- Thème clair/sombre
- Navigation par catégories
- Design inspiré XPENG XOS

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment participer :

### **Signaler un bug**
1. Vérifiez qu'il n'existe pas déjà dans [Issues](https://github.com/dlnraja/xpengmedia/issues)
2. Créez une nouvelle issue avec le template "Bug Report"
3. Décrivez le problème en détail avec captures d'écran si possible

### **Proposer une fonctionnalité**
1. Ouvrez une issue avec le template "Feature Request"
2. Expliquez le cas d'usage et les bénéfices
3. Discutez de l'implémentation si besoin

### **Ajouter un service**
1. Forkez le projet
2. Modifiez `src/data/platforms.ts`
3. Suivez la structure existante :
```typescript
{
  id: 'service-id',
  name: 'Service Name',
  description: 'Description courte du service.',
  url: 'https://service.com',
  icon: '🎬',
  availability: ['global'], // ou ['europe'], ['china'], etc.
  tags: ['Tag1', 'Tag2'],
}
```
4. Créez une Pull Request

### **Code de conduite**
- Soyez respectueux et constructif
- Testez vos modifications avant de soumettre
- Suivez les conventions de code existantes
- Documentez les changements importants

---

## 📄 Licence

Ce projet est sous licence **MIT**.

Vous êtes libre de :
- ✅ Utiliser commercialement
- ✅ Modifier
- ✅ Distribuer
- ✅ Utiliser en privé

Conditions :
- 📋 Inclure la licence et le copyright
- ⚠️ Aucune garantie fournie

Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 👨‍💻 Auteur

**dlnraja**

- GitHub: [@dlnraja](https://github.com/dlnraja)
- Projet: [XPENG Media Hub](https://github.com/dlnraja/xpengmedia)
- Demo: [https://dlnraja.github.io/xpengmedia/](https://dlnraja.github.io/xpengmedia/)

---

## 🙏 Remerciements

- **XPENG Motors** pour l'inspiration du design XOS
- **React Team** pour l'excellente bibliothèque
- **Vite Team** pour le build tool rapide
- **Tailwind CSS** pour le système de styling
- **Communauté open-source** pour les outils et bibliothèques

---

## 📞 Support

Besoin d'aide ? Plusieurs options :

- 📖 **Documentation** : Lisez ce README complet
- 🐛 **Bugs** : [Créer une issue](https://github.com/dlnraja/xpengmedia/issues)
- 💡 **Questions** : [Discussions GitHub](https://github.com/dlnraja/xpengmedia/discussions)
- ⭐ **Star le projet** si vous l'aimez !

---

<div align="center">

### ⭐ Si ce projet vous plaît, n'hésitez pas à le star ! ⭐

**Fait avec 💙 pour les conducteurs XPENG 🚗**

[![GitHub stars](https://img.shields.io/github/stars/dlnraja/xpengmedia?style=social)](https://github.com/dlnraja/xpengmedia/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/dlnraja/xpengmedia?style=social)](https://github.com/dlnraja/xpengmedia/network/members)

[⬆ Retour en haut](#-xpeng-media-hub-)

</div>
