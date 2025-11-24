import React from 'react';
import { Twitter, Github, Flower2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-purple-100 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          
          <div className="text-left max-w-xs">
            <div className="flex items-center gap-2 mb-4">
               <div className="p-2 bg-purple-100 rounded-full">
                 <Flower2 className="w-5 h-5 text-[#7C3AED]" />
               </div>
               <span className="text-xl font-bold text-[#2E1065]">Bloom</span>
            </div>
            <p className="text-purple-400 text-sm leading-relaxed">
              A programmable, utility-driven platform designed for seamless integration into DeFi and Web3 sharing protocols.
            </p>
          </div>

          <div className="flex gap-16">
             <div className="flex flex-col gap-4">
                <h4 className="font-bold text-[#2E1065]">Product</h4>
                <a href="#" className="text-sm text-purple-400 hover:text-[#7C3AED]">Features</a>
                <a href="#" className="text-sm text-purple-400 hover:text-[#7C3AED]">Integrations</a>
                <a href="#" className="text-sm text-purple-400 hover:text-[#7C3AED]">Pricing</a>
             </div>
             <div className="flex flex-col gap-4">
                <h4 className="font-bold text-[#2E1065]">Company</h4>
                <a href="#" className="text-sm text-purple-400 hover:text-[#7C3AED]">About</a>
                <a href="#" className="text-sm text-purple-400 hover:text-[#7C3AED]">Careers</a>
                <a href="#" className="text-sm text-purple-400 hover:text-[#7C3AED]">Blog</a>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-purple-50">
           <p className="text-purple-300 text-sm">
            &copy; {new Date().getFullYear()} Bloom Inc. All rights reserved.
           </p>
           <div className="flex gap-4">
             <a href="#" className="text-purple-300 hover:text-[#7C3AED]"><Twitter size={20} /></a>
             <a href="#" className="text-purple-300 hover:text-[#7C3AED]"><Github size={20} /></a>
           </div>
        </div>

      </div>
    </footer>
  );
};