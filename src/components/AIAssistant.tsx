import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Volume2 } from 'lucide-react';

interface AIAssistantProps {
  message: string;
  isSpeaking: boolean;
  onSpeak: () => void;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ message, isSpeaking, onSpeak }) => {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    if (message) {
      setShowBubble(true);
      const timer = setTimeout(() => setShowBubble(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end">
      <AnimatePresence>
        {(showBubble || isSpeaking) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-white p-4 rounded-2xl rounded-br-none shadow-xl border border-indigo-100 max-w-xs relative"
          >
            <p className="text-slate-700 text-sm font-medium">{message}</p>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white transform rotate-45 border-r border-b border-indigo-100"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={onSpeak}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isSpeaking ? { 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        } : {}}
        transition={isSpeaking ? { 
          repeat: Infinity, 
          duration: 1 
        } : {}}
        className={`
          w-20 h-20 rounded-full shadow-2xl flex items-center justify-center border-4 
          ${isSpeaking ? 'bg-indigo-500 border-indigo-300' : 'bg-white border-indigo-100'}
          transition-colors duration-300 relative group
        `}
      >
        {/* Simple CSS Cat Face */}
        <div className="relative w-12 h-12">
           {/* Ears */}
           <div className={`absolute -top-1 left-0 w-4 h-4 transform -rotate-12 rounded-sm ${isSpeaking ? 'bg-white' : 'bg-indigo-500'}`}></div>
           <div className={`absolute -top-1 right-0 w-4 h-4 transform rotate-12 rounded-sm ${isSpeaking ? 'bg-white' : 'bg-indigo-500'}`}></div>
           
           {/* Head */}
           <div className={`absolute inset-0 rounded-2xl ${isSpeaking ? 'bg-white' : 'bg-indigo-500'}`}></div>
           
           {/* Eyes */}
           <div className={`absolute top-4 left-2 w-2 h-2 rounded-full ${isSpeaking ? 'bg-indigo-500' : 'bg-white'} animate-pulse`}></div>
           <div className={`absolute top-4 right-2 w-2 h-2 rounded-full ${isSpeaking ? 'bg-indigo-500' : 'bg-white'} animate-pulse`}></div>
           
           {/* Nose */}
           <div className={`absolute top-7 left-1/2 transform -translate-x-1/2 w-2 h-1.5 rounded-full ${isSpeaking ? 'bg-indigo-300' : 'bg-pink-300'}`}></div>
        </div>

        {/* Status Indicator */}
        <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1.5 border-2 border-white">
          {isSpeaking ? <Volume2 size={12} className="text-white" /> : <MessageCircle size={12} className="text-white" />}
        </div>
      </motion.button>
    </div>
  );
};
