/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CategoryNav } from './components/CategoryNav';
import { ThemeCard } from './components/ThemeCard';
import { DetailModal } from './components/DetailModal';
import { AIAssistant } from './components/AIAssistant';
import { BlindBox } from './components/BlindBox';
import { THEMES, CATEGORIES, CategoryId, Theme } from './data/themes';
import { motion } from 'motion/react';
import { Settings } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('charity');
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [aiMessage, setAiMessage] = useState("欢迎来到 AI 魔法任务大厅！点击卡片，我来为你解说！");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string>('');
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      // Default to a Chinese voice if available and not set
      if (availableVoices.length > 0 && !selectedVoiceURI) {
        const zhVoice = availableVoices.find(v => v.lang.includes('zh-CN')) || availableVoices.find(v => v.lang.includes('zh'));
        if (zhVoice) {
          setSelectedVoiceURI(zhVoice.voiceURI);
        } else {
             setSelectedVoiceURI(availableVoices[0].voiceURI);
        }
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => { window.speechSynthesis.onvoiceschanged = null; };
  }, [selectedVoiceURI]);

  // Filter themes based on active category
  const displayedThemes = THEMES.filter(t => t.categoryId === activeCategory);

  // Handle TTS
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop previous
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 1.1;
      utterance.pitch = 1.1;
      
      if (selectedVoiceURI) {
        const voice = voices.find(v => v.voiceURI === selectedVoiceURI);
        if (voice) utterance.voice = voice;
      }

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleThemeSelect = (theme: Theme) => {
    setSelectedTheme(theme);
    const message = `哇！${theme.title}！这是一个非常棒的主题。挑战任务是：${theme.challengeTask}`;
    setAiMessage(message);
    speak(message);
  };

  const handleCategoryChange = (id: CategoryId) => {
    setActiveCategory(id);
    const category = CATEGORIES.find(c => c.id === id);
    if (category) {
      const message = `切换到${category.name}！${category.description}`;
      setAiMessage(message);
      speak(message);
    }
  };

  const handleBlindBoxSelect = (theme: Theme) => {
    // Switch category to match the random theme so it's visible in background (optional)
    setActiveCategory(theme.categoryId);
    
    // Open modal
    setSelectedTheme(theme);
    
    const message = `AI 魔法帽为你分配的任务是——${theme.title}！快去挑战吧！`;
    setAiMessage(message);
    speak(message);
  };

  const handleAiClick = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      speak(aiMessage);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-indigo-100 to-transparent -z-10" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10" />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-12">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4 tracking-tight">
              AI 创意编程任务大厅
            </h1>
            <p className="text-slate-500 text-lg">
              选择你的魔法学院，开启 AI 创造之旅
            </p>
          </motion.div>
        </header>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <CategoryNav activeCategory={activeCategory} onSelect={handleCategoryChange} />
          <div className="mb-8 md:mb-0">
             <BlindBox onSelect={handleBlindBoxSelect} />
          </div>
        </div>

        {/* Theme Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        >
          {displayedThemes.map((theme) => (
            <ThemeCard 
              key={theme.id} 
              theme={theme} 
              onClick={handleThemeSelect} 
            />
          ))}
        </motion.div>
      </main>

      {/* Overlays */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="bg-white/80 backdrop-blur p-2 rounded-full shadow-lg hover:bg-white transition-colors border border-slate-200"
          title="语音设置"
        >
          <Settings size={24} className="text-slate-600" />
        </button>
        
        {showSettings && (
          <div className="absolute top-12 right-0 bg-white p-4 rounded-xl shadow-xl w-72 border border-slate-100">
            <h3 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
              <Settings size={16} />
              语音助手设置
            </h3>
            <div className="space-y-2">
              <label className="text-xs text-slate-500">选择语音</label>
              <select
                value={selectedVoiceURI}
                onChange={(e) => setSelectedVoiceURI(e.target.value)}
                className="w-full p-2 border border-slate-200 rounded-lg text-sm bg-slate-50 outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {voices.map(v => (
                  <option key={v.voiceURI} value={v.voiceURI}>
                    {v.name} ({v.lang})
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      <DetailModal 
        theme={selectedTheme} 
        onClose={() => {
          setSelectedTheme(null);
          window.speechSynthesis.cancel();
          setIsSpeaking(false);
        }} 
      />
      
      <AIAssistant 
        message={aiMessage} 
        isSpeaking={isSpeaking} 
        onSpeak={handleAiClick} 
      />
    </div>
  );
}

