import React, { useState } from 'react';
import { Link2, ArrowLeft, BarChart3, Globe, Zap, Copy, Check } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export const UrlShortener: React.FC<Props> = ({ onBack }) => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    // Simulate shortening
    const code = Math.random().toString(36).substring(7);
    setShortUrl(`https://bloom.io/${code}`);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-32 px-4 max-w-4xl mx-auto animate-in fade-in duration-500">
      <button 
        onClick={onBack}
        className="group flex items-center text-purple-400 hover:text-[#2E1065] mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back home
      </button>

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#2E1065] mb-4">Shorten Links</h2>
        <p className="text-purple-500">Clean, tracked, and beautiful links for your audience.</p>
      </div>

      <div className="bg-white border border-purple-100 rounded-[2.5rem] p-12 shadow-2xl shadow-purple-100/50">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-purple-300">
              <Link2 size={20} />
            </div>
            <input 
              type="url" 
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste your long URL here..."
              className="w-full bg-[#FAF5FF] border border-transparent rounded-2xl py-5 pl-14 pr-6 text-[#2E1065] placeholder-purple-300 focus:bg-white focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10 outline-none transition-all font-medium"
              required
            />
          </div>
          <button 
            type="submit"
            className="bg-[#2E1065] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#4C1D95] transition-all shadow-lg shadow-purple-900/20"
          >
            Shorten
          </button>
        </form>

        {shortUrl && (
          <div className="mt-10 bg-[#FAF5FF] border border-purple-200 rounded-2xl p-8 animate-in slide-in-from-top-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left w-full overflow-hidden">
                <p className="text-xs text-purple-400 mb-2 font-semibold uppercase tracking-wider">Success</p>
                <p className="text-2xl font-bold text-[#7C3AED] font-mono tracking-tight">{shortUrl}</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                 <button 
                   onClick={handleCopy}
                   className="flex-1 md:flex-none bg-[#2E1065] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#4C1D95] transition-colors flex items-center justify-center gap-2 min-w-[120px]"
                 >
                   {copied ? <Check size={18} className="text-green-400"/> : <Copy size={18} />}
                   {copied ? 'Copied' : 'Copy'}
                 </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
        <div className="p-6 text-center">
           <div className="w-16 h-16 bg-white rounded-2xl shadow-lg shadow-purple-100 flex items-center justify-center text-[#2E1065] mx-auto mb-6">
             <BarChart3 />
           </div>
           <h3 className="text-[#2E1065] font-bold text-lg mb-2">Analytics</h3>
           <p className="text-purple-500 text-sm leading-relaxed">
             Real-time insights on clicks and engagement.
           </p>
        </div>
        <div className="p-6 text-center">
           <div className="w-16 h-16 bg-white rounded-2xl shadow-lg shadow-purple-100 flex items-center justify-center text-[#2E1065] mx-auto mb-6">
             <Globe />
           </div>
           <h3 className="text-[#2E1065] font-bold text-lg mb-2">Custom Domains</h3>
           <p className="text-purple-500 text-sm leading-relaxed">
             Connect your own brand for verified trust.
           </p>
        </div>
        <div className="p-6 text-center">
           <div className="w-16 h-16 bg-white rounded-2xl shadow-lg shadow-purple-100 flex items-center justify-center text-[#2E1065] mx-auto mb-6">
             <Zap />
           </div>
           <h3 className="text-[#2E1065] font-bold text-lg mb-2">API First</h3>
           <p className="text-purple-500 text-sm leading-relaxed">
             Integrate directly into your own applications.
           </p>
        </div>
      </div>
    </div>
  );
};