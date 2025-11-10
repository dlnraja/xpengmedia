import React from 'react';
import { motion } from 'framer-motion';
import EnhancedFavoritesGrid from '../components/favorites/EnhancedFavoritesGrid';

export const FavoritesPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <EnhancedFavoritesGrid />
    </motion.div>
  );
};
