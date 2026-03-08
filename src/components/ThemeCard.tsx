import React from 'react';
import { motion } from 'motion/react';
import { Theme, CATEGORIES } from '../data/themes';
import { ArrowRight } from 'lucide-react';

interface ThemeCardProps {
  theme: Theme;
  onClick: (theme: Theme) => void;
}

export const ThemeCard: React.FC<ThemeCardProps> = ({ theme, onClick }) => {
  const category = CATEGORIES.find(c => c.id === theme.categoryId);
  const bgClass = category?.color || 'bg-indigo-500';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      onClick={() => onClick(theme)}
      className="group relative bg-white rounded-3xl p-5 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden border border-slate-100 hover:border-indigo-200"
    >
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${bgClass} text-white`}>
            {theme.iconName}
          </div>
          
          <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-slate-100 text-slate-500 group-hover:bg-white group-hover:shadow-sm transition-all border border-slate-100">
            {category?.name}
          </span>
        </div>

        {/* Title & Desc */}
        <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-indigo-600 transition-colors">
          {theme.title}
        </h3>
        <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-grow leading-relaxed">
          {theme.description}
        </p>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-50 flex items-center justify-between mt-auto">
          <div className="flex flex-wrap gap-1.5">
             {theme.requiredBlocks.slice(0, 2).map((block, i) => (
              <span key={i} className="text-[10px] bg-slate-50 text-slate-500 border border-slate-100 px-2 py-1 rounded-md group-hover:border-slate-200 transition-colors">
                {block}
              </span>
            ))}
          </div>
          
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-50 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
            <ArrowRight size={16} className="-ml-0.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
