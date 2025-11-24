import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AiAssistant } from './components/AiAssistant'; // Used as Text Tool
import { FileSharing } from './components/LiveNow'; // Repurposed as File Tool
import { UrlShortener } from './components/LiveStreamCard'; // Repurposed as URL Tool
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { ToolType } from './types';
import { Flower2 } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#1e0b4b] flex items-center justify-center overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob"></div>
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600 rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-blob animation-delay-4000"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-8">
          {/* Ping Effect */}
          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping duration-1000"></div>
          {/* Glass Icon Container */}
          <div className="relative w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/20">
            <Flower2 size={48} className="text-white animate-pulse" strokeWidth={1.5} />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-white tracking-tight mb-6 animate-pulse">Bloom</h1>
        
        {/* Progress Bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 animate-fill rounded-full"></div>
        </div>
        
        <p className="mt-4 text-purple-200/60 text-sm font-medium tracking-widest uppercase">Initializing</p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ToolType>('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'text':
        return <AiAssistant onBack={() => setCurrentView('home')} />;
      case 'file':
        return <FileSharing onBack={() => setCurrentView('home')} />;
      case 'url':
        return <UrlShortener onBack={() => setCurrentView('home')} />;
      default:
        return (
          <>
            <Hero onSelectTool={setCurrentView} />
            <Features />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF5FF] text-[#2E1065] selection:bg-[#A855F7] selection:text-white font-sans overflow-x-hidden animate-in fade-in duration-700">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      <main className="w-full relative z-10">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;