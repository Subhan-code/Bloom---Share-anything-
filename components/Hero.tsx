import React, { useState } from 'react';
import { FileText, UploadCloud, Link2, ArrowRight, Command } from 'lucide-react';
import { ToolType, ToolCardProps } from '../types';

interface HeroProps {
  onSelectTool: (tool: ToolType) => void;
}

const tools: ToolCardProps[] = [
  {
    id: 'text',
    title: 'Smart Text',
    description: 'AI grammar & summaries.',
    icon: <FileText size={24} />,
    color: 'text-purple-300'
  },
  {
    id: 'file',
    title: 'File Share',
    description: 'Secure P2P transfer.',
    icon: <UploadCloud size={24} />,
    color: 'text-pink-300'
  },
  {
    id: 'url',
    title: 'Shortener',
    description: 'Clean tracking links.',
    icon: <Link2 size={24} />,
    color: 'text-indigo-300'
  }
];

export const Hero: React.FC<HeroProps> = ({ onSelectTool }) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSmartAction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue) return;
    if (inputValue.startsWith('http://') || inputValue.startsWith('https://') || inputValue.includes('www.')) {
      onSelectTool('url');
    } else {
      onSelectTool('text');
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-28 pb-12 bg-[#FAF5FF]">
      
      {/* Main Hero Container - Framed */}
      <div className="w-full max-w-[1400px] mx-auto relative rounded-[3rem] overflow-hidden border-[8px] border-white shadow-2xl shadow-purple-900/20 transition-all duration-500 min-h-[800px] flex items-center justify-center group/hero">
        
        {/* Advanced Mesh Gradient Background */}
        <div className="absolute inset-0 bg-[#1e0b4b]">
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-purple-600/40 mix-blend-screen filter blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/40 mix-blend-screen filter blur-[100px] animate-pulse delay-1000"></div>
            <div className="absolute top-[40%] left-[40%] w-[500px] h-[500px] rounded-full bg-fuchsia-600/30 mix-blend-screen filter blur-[100px] animate-float"></div>
            
            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.65%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noiseFilter)%22%20opacity%3D%221%22%2F%3E%3C%2Fsvg%3E')] mix-blend-overlay pointer-events-none"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
          
          {/* Badge - Pill Shape */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-purple-200 text-xs font-medium mb-10 hover:bg-white/10 transition-colors cursor-default select-none">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="tracking-wide">Bloom Intelligence 2.0 is live</span>
             </div>
          </div>

          {/* Headline - Big & Tight */}
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-8 leading-[1] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 drop-shadow-2xl">
            Where ideas <br/>
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-200 pb-2">
              bloom.
              {/* Subtle underline decoration */}
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-purple-500 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-purple-100/80 max-w-2xl mb-16 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            The intelligent workspace for your digital assets.
            Share text, files, and links with a single keystroke.
          </p>

          {/* Smart Input - Floating & Frosted */}
          <div className="w-full max-w-2xl relative group mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 z-20">
             {/* Glow Effect */}
             <div className={`absolute -inset-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 ${isFocused ? 'opacity-100 blur-md' : ''}`}></div>
             
             <form onSubmit={handleSmartAction} className="relative flex items-center bg-white/5 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-2 shadow-2xl transition-all duration-300 group-hover:bg-white/10">
                <div className="pl-6 pr-4 text-purple-200">
                   <Command size={24} className={`transition-colors duration-300 ${isFocused ? "text-white" : "opacity-70"}`} />
                </div>
                <input
                   type="text"
                   className="flex-1 py-5 bg-transparent text-white placeholder-purple-200/50 text-xl font-medium outline-none"
                   placeholder="Paste a link, drop a file, or type..."
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   onFocus={() => setIsFocused(true)}
                   onBlur={() => setIsFocused(false)}
                />
                <button 
                  type="submit" 
                  className="bg-white text-[#2E1065] p-5 rounded-[2rem] hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center hover:shadow-purple-500/20"
                >
                   <ArrowRight size={22} strokeWidth={2.5} />
                </button>
             </form>
          </div>

          {/* Feature Cards - Minimalist Glass */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
             {tools.map((tool) => (
               <button
                 key={tool.id}
                 onClick={() => onSelectTool(tool.id)}
                 className="group relative flex flex-col items-center text-center p-8 rounded-[2rem] bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 active:scale-95"
               >
                  <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/10 ${tool.color}`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                  <p className="text-purple-200/60 text-sm leading-relaxed">{tool.description}</p>
               </button>
             ))}
          </div>

        </div>
      </div>
    </div>
  );
};
