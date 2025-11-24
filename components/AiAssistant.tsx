import React, { useState } from 'react';
import { enhanceTextContent } from '../services/geminiService';
import { Sparkles, Copy, ArrowLeft, Wand2, Check, Share2, Loader2, FileText } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export const AiAssistant: React.FC<Props> = ({ onBack }) => {
  const [text, setText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleAI = async (action: 'grammar' | 'summarize' | 'optimize') => {
    if (!text.trim()) return;
    setIsProcessing(true);
    try {
      const result = await enhanceTextContent(text, action);
      setText(result.content);
    } catch (e) {
      console.error(e);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-32 px-4 max-w-6xl mx-auto animate-in fade-in duration-500">
      <button 
        onClick={onBack}
        className="group flex items-center text-purple-400 hover:text-[#2E1065] mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back home
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Editor Section */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-[2rem] shadow-xl shadow-purple-900/5 border border-purple-100 flex flex-col h-[600px] overflow-hidden">
            {/* Toolbar */}
            <div className="border-b border-purple-50 p-4 flex justify-between items-center bg-purple-50/30">
              <div className="flex items-center gap-2">
                 <div className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#7C3AED] text-xs font-bold uppercase tracking-wide">Draft</div>
                 <span className="ml-2 text-sm text-purple-300 font-medium">Last edited just now</span>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={handleCopy}
                  className="p-2 hover:bg-purple-50 rounded-lg text-purple-300 hover:text-[#2E1065] transition-colors"
                  title="Copy to Clipboard"
                >
                  {copied ? <Check size={18} className="text-green-500"/> : <Copy size={18} />}
                </button>
              </div>
            </div>
            
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Start writing or paste text to bloom..."
              className="flex-1 bg-white text-[#2E1065] p-8 resize-none focus:outline-none font-serif text-lg leading-relaxed placeholder-purple-200"
              spellCheck={false}
            />

            <div className="border-t border-purple-50 p-4 bg-white flex justify-between items-center">
               <span className="text-xs text-purple-300 font-medium">{text.length} chars</span>
               <button className="bg-[#2E1065] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#4C1D95] transition-colors flex items-center gap-2 shadow-lg shadow-purple-900/20">
                 <Share2 size={16} /> Share Note
               </button>
            </div>
          </div>
        </div>

        {/* AI Sidebar */}
        <div className="lg:col-span-4 space-y-6">
           <div className="bg-white/60 backdrop-blur-md border border-purple-100 rounded-[2rem] p-8 shadow-lg shadow-purple-900/5">
              <div className="flex items-center gap-2 mb-6 text-[#7C3AED]">
                <Sparkles size={20} />
                <h3 className="font-bold text-[#2E1065]">Refine with AI</h3>
              </div>
              
              <div className="space-y-4">
                <button 
                  onClick={() => handleAI('grammar')}
                  disabled={isProcessing || !text}
                  className="w-full flex items-center justify-between p-4 bg-white border border-purple-50 hover:border-[#7C3AED] hover:shadow-md rounded-xl text-left transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <div>
                    <div className="font-bold text-[#2E1065] text-sm">Polished Grammar</div>
                    <div className="text-xs text-purple-300 mt-1">Professional & Clean</div>
                  </div>
                  {isProcessing ? <Loader2 className="animate-spin w-4 h-4 text-[#7C3AED]" /> : <Wand2 className="w-4 h-4 text-purple-200 group-hover:text-[#7C3AED]" />}
                </button>

                <button 
                  onClick={() => handleAI('summarize')}
                  disabled={isProcessing || !text}
                  className="w-full flex items-center justify-between p-4 bg-white border border-purple-50 hover:border-[#7C3AED] hover:shadow-md rounded-xl text-left transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <div>
                    <div className="font-bold text-[#2E1065] text-sm">Brief Summary</div>
                    <div className="text-xs text-purple-300 mt-1">Concise & Clear</div>
                  </div>
                  {isProcessing ? <Loader2 className="animate-spin w-4 h-4 text-[#7C3AED]" /> : <FileText className="w-4 h-4 text-purple-200 group-hover:text-[#7C3AED]" />}
                </button>

                <button 
                  onClick={() => handleAI('optimize')}
                  disabled={isProcessing || !text}
                  className="w-full flex items-center justify-between p-4 bg-white border border-purple-50 hover:border-[#7C3AED] hover:shadow-md rounded-xl text-left transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <div>
                    <div className="font-bold text-[#2E1065] text-sm">Social Ready</div>
                    <div className="text-xs text-purple-300 mt-1">Engaging & Tagged</div>
                  </div>
                  {isProcessing ? <Loader2 className="animate-spin w-4 h-4 text-[#7C3AED]" /> : <Share2 className="w-4 h-4 text-purple-200 group-hover:text-[#7C3AED]" />}
                </button>
              </div>
           </div>

           <div className="bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] rounded-[2rem] p-8 text-white shadow-xl shadow-purple-600/20">
              <h4 className="font-bold text-lg mb-2">Pro Tip</h4>
              <p className="text-sm text-purple-100 leading-relaxed opacity-90">
                Use the "Brief Summary" tool to instantly turn messy meeting notes into clean, shareable action items for your team.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};