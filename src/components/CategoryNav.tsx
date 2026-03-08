import React from 'react';
import { motion } from 'motion/react';
import { Category, CATEGORIES, CategoryId } from '../data/themes';

interface CategoryNavProps {
  activeCategory: CategoryId;
  onSelect: (id: CategoryId) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({ activeCategory, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {CATEGORIES.map((category) => {
        const isActive = activeCategory === category.id;
        const Icon = category.icon;
        
        return (
          <motion.button
            key={category.id}
            onClick={() => onSelect(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              scale: isActive ? 1.1 : 0.9,
              opacity: isActive ? 1 : 0.7
            }}
            className={`
              relative px-6 py-3 rounded-2xl flex items-center gap-2 font-bold text-white shadow-lg transition-colors
              ${category.color}
              ${isActive ? 'ring-4 ring-white/50' : 'hover:opacity-90'}
            `}
          >
            <Icon size={20} />
            <span>{category.name}</span>
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 rounded-2xl border-2 border-white"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
};
