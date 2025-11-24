import React from 'react';
import { Menu, X, Flower2 } from 'lucide-react';
import { ToolType } from '../types';

interface HeaderProps {
  currentView: ToolType;
  onNavigate: (view: ToolType) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Always use the deep purple/black text color as requested
  const textColor = 'text-[#2E1065]';
  
  // Dynamic container styling: Always glass, but changes opacity/width on scroll
  const containerClasses = scrolled 
    ? 'w-[85%] md:w-[70%] lg:max-w-4xl bg-white/90 shadow-2xl shadow-purple-900/10 border-purple-100 py-3' 
    : 'w-[94%] max-w-7xl bg-white/70 py-5 border-white/40';

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <header 
        className={`pointer-events-auto mt-6 flex items-center justify-between px-6 md:px-8 rounded-full border backdrop-blur-xl transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${containerClasses}`}
      >
        {/* Logo Area */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => onNavigate('home')}
        >
          <div className="p-2 rounded-full bg-purple-100 text-[#7C3AED] shadow-sm transition-transform duration-500 group-hover:rotate-12">
              <Flower2 className="w-5 h-5" />
          </div>
          <h1 className={`text-xl font-bold tracking-tight leading-none ${textColor}`}>
            Bloom
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {['Business', 'Developers', 'About'].map((item) => (
              <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'about' ? 'faq' : item.toLowerCase() === 'developers' ? 'pricing' : 'features')} 
                  className={`text-sm font-bold px-5 py-2 rounded-full transition-all duration-300 ${textColor} hover:bg-purple-100/50`}
              >
                  {item}
              </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className={`text-sm font-bold transition-colors px-2 ${textColor} opacity-70 hover:opacity-100`}>Log in</button>
          <button className="px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg bg-[#2E1065] text-white hover:bg-[#4C1D95] shadow-purple-900/20">
            Launch App
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-full transition-colors ${textColor} hover:bg-purple-100`}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="pointer-events-auto absolute top-full mt-4 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-[2rem] p-6 shadow-2xl border border-purple-100 animate-in slide-in-from-top-5 md:hidden z-40">
          <div className="flex flex-col gap-3">
            <button onClick={() => scrollToSection('features')} className="text-left font-bold text-[#2E1065] py-3 px-4 hover:bg-purple-50 rounded-xl">Business</button>
            <button onClick={() => scrollToSection('pricing')} className="text-left font-bold text-[#2E1065] py-3 px-4 hover:bg-purple-50 rounded-xl">Developers</button>
            <button onClick={() => scrollToSection('faq')} className="text-left font-bold text-[#2E1065] py-3 px-4 hover:bg-purple-50 rounded-xl">About</button>
            <div className="h-px bg-purple-100 my-2"></div>
            <button className="w-full bg-[#2E1065] text-white px-4 py-4 rounded-xl font-bold mt-2 shadow-lg shadow-purple-900/20">Launch App</button>
          </div>
        </div>
      )}
    </div>
  );
};