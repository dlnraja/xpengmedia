import React from 'react';

type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
};

const categories: Category[] = [
  {
    id: 'videos',
    name: 'Vidéos',
    description: 'Films, séries et vidéos en streaming',
    icon: '🎬',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'music',
    name: 'Musique',
    description: 'Écoutez vos morceaux préférés',
    icon: '🎵',
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'games',
    name: 'Jeux',
    description: 'Jeux pour vous divertir',
    icon: '🎮',
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 'charging',
    name: 'Recharge',
    description: 'Trouvez une borne de recharge',
    icon: '🔌',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    id: 'navigation',
    name: 'Navigation',
    description: 'Trouvez votre chemin facilement',
    icon: '🗺️',
    color: 'from-red-500 to-red-600',
  },
  {
    id: 'news',
    name: 'Actualités',
    description: 'Restez informé',
    icon: '📰',
    color: 'from-pink-500 to-pink-600',
  },
];

export const CategoriesPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Toutes les catégories</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`bg-gradient-to-r ${category.color} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow`}
          >
            <div className="p-6 text-white">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="opacity-90">{category.description}</p>
              <button className="mt-4 px-4 py-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-30 transition-colors">
                Explorer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
