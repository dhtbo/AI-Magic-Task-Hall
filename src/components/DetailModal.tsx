import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Theme, CATEGORIES } from '../data/themes';
import { X, Sparkles, Box, Trophy, Lightbulb, ListOrdered, ArrowRight } from 'lucide-react';

interface DetailModalProps {
  theme: Theme | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ theme, onClose }) => {
  if (!theme) return null;

  const category = CATEGORIES.find(c => c.id === theme.categoryId);

  return (
    <AnimatePresence>
      {theme && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`relative h-32 shrink-0 ${category?.color || 'bg-indigo-500'} overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              <div className="absolute -bottom-6 -right-6 text-9xl opacity-20 rotate-12 select-none">
                {theme.iconName}
              </div>
              
              <div className="absolute bottom-0 left-0 p-6 flex items-end gap-4">
                <div className="bg-white p-3 rounded-2xl shadow-lg text-5xl leading-none">
                  {theme.iconName}
                </div>
                <div className="mb-1">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-black/20 backdrop-blur-md mb-2 border border-white/20">
                    {category?.name}
                  </span>
                  <h2 className="text-3xl font-bold text-white shadow-sm">{theme.title}</h2>
                </div>
              </div>

              <button 
                onClick={onClose}
                className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors backdrop-blur-md border border-white/20"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Column (Main Content) */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Description */}
                  <div>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {theme.description}
                    </p>
                  </div>

                  {/* Challenge Task */}
                  <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Trophy size={100} className="text-indigo-600" />
                    </div>
                    <h3 className="flex items-center gap-2 font-bold text-indigo-900 mb-3 text-lg relative z-10">
                      <Trophy size={20} className="text-indigo-600" />
                      挑战任务
                    </h3>
                    <p className="text-indigo-800 text-base leading-relaxed relative z-10 font-medium">
                      {theme.challengeTask}
                    </p>
                  </div>

                  {/* Task Steps */}
                  <div>
                    <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4 text-lg">
                      <ListOrdered size={20} className="text-purple-600" />
                      任务步骤
                    </h3>
                    <div className="space-y-4">
                      {theme.taskSteps?.map((step, i) => (
                        <div key={i} className="flex gap-4 group">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm border border-purple-200 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            {i + 1}
                          </div>
                          <div className="flex-1 bg-slate-50 rounded-xl p-4 border border-slate-100 group-hover:border-purple-200 transition-colors">
                            <p className="text-slate-700 text-sm">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column (Sidebar) */}
                <div className="space-y-6">
                  
                  {/* Required Blocks */}
                  <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
                    <h3 className="flex items-center gap-2 font-bold text-amber-900 mb-3">
                      <Box size={18} className="text-amber-600" />
                      必备积木
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {theme.requiredBlocks.map((block, i) => (
                        <span key={i} className="bg-white text-amber-800 px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm border border-amber-100 flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          {block}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Creation Tips */}
                  <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                    <h3 className="flex items-center gap-2 font-bold text-blue-900 mb-3">
                      <Lightbulb size={18} className="text-blue-600" />
                      创作建议
                    </h3>
                    <ul className="space-y-3">
                      {theme.creationTips?.map((tip, i) => (
                        <li key={i} className="flex gap-2 text-sm text-blue-800">
                          <ArrowRight size={14} className="mt-1 flex-shrink-0 text-blue-400" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlight */}
                  <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
                    <h3 className="flex items-center gap-2 font-bold text-emerald-900 mb-3">
                      <Sparkles size={18} className="text-emerald-600" />
                      通关秘籍
                    </h3>
                    <p className="text-emerald-800 text-sm leading-relaxed">
                      {theme.highlight}
                    </p>
                  </div>

                </div>
              </div>
            </div>
            
            {/* Footer Actions (Optional) */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button 
                onClick={onClose}
                className="px-6 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl font-medium transition-colors"
              >
                关闭
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
