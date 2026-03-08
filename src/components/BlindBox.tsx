import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Dices } from 'lucide-react';
import { THEMES, Theme } from '../data/themes';

interface BlindBoxProps {
  onSelect: (theme: Theme) => void;
}

export const BlindBox: React.FC<BlindBoxProps> = ({ onSelect }) => {
  const [isRolling, setIsRolling] = useState(false);

  const handleRoll = () => {
    if (isRolling) return;
    setIsRolling(true);
    
    // Simulate rolling effect
    let count = 0;
    const interval = setInterval(() => {
      count++;
      if (count > 10) {
        clearInterval(interval);
        const randomTheme = THEMES[Math.floor(Math.random() * THEMES.length)];
        onSelect(randomTheme);
        setIsRolling(false);
      }
    }, 100);
  };

  return (
    <motion.button
      onClick={handleRoll}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        bg-gradient-to-r from-violet-600 to-fuchsia-600 
        text-white px-6 py-3 rounded-2xl font-bold shadow-lg 
        flex items-center gap-2 hover:shadow-xl transition-shadow
        border-2 border-white/20
      "
    >
      <motion.div
        animate={isRolling ? { rotate: 360 } : {}}
        transition={{ repeat: isRolling ? Infinity : 0, duration: 0.5 }}
      >
        <Dices size={20} />
      </motion.div>
      <span>AI 帮我选</span>
    </motion.button>
  );
};
