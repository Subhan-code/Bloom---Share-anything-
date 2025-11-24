import React from 'react';
import { Shield, Zap, Globe, CheckCircle2, Star } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <>
      {/* Stats Section (Bloom Style: Minimal, Clean) */}
      <section className="py-20 bg-[#FAF5FF]">
        <div className="max-w-7xl mx-auto px-4">
           <div className="bg-white rounded-[2.5rem] p-12 md:p-16 shadow-xl shadow-purple-900/5 flex flex-col md:flex-row justify-between items-center gap-12 border border-purple-50">
              <div className="text-center md:text-left">
                 <h3 className="text-3xl font-bold text-[#2E1065] mb-2">Capital that grows</h3>
                 <p className="text-purple-400 max-w-xs">Earn passive value as your shared content reaches more people instantly.</p>
              </div>
              
              <div className="flex gap-12 md:gap-24">
                 <div className="text-center">
                    <div className="text-4xl font-bold text-[#2E1065] mb-1">100%</div>
                    <div className="text-sm font-semibold text-purple-300 uppercase tracking-wider">Secure</div>
                 </div>
                 <div className="text-center">
                    <div className="text-4xl font-bold text-[#2E1065] mb-1">2PB</div>
                    <div className="text-sm font-semibold text-purple-300 uppercase tracking-wider">Data</div>
                 </div>
                 <div className="text-center">
                    <div className="text-4xl font-bold text-[#2E1065] mb-1">0ms</div>
                    <div className="text-sm font-semibold text-purple-300 uppercase tracking-wider">Lag</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Feature 1 */}
           <div className="bg-[#E9D5FF] rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-center min-h-[400px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="relative z-10">
                 <h3 className="text-3xl font-bold text-[#2E1065] mb-6">Always liquid, <br/>always stable</h3>
                 <p className="text-lg text-purple-900/70 mb-8 max-w-sm leading-relaxed">
                    Stay fully connected with instant access to your files and links. No lockups, no delays, just pure speed.
                 </p>
                 <button className="w-fit px-6 py-3 rounded-full bg-[#2E1065] text-white font-semibold text-sm hover:bg-[#4C1D95] transition-colors">
                    Start Sharing
                 </button>
              </div>
              {/* Abstract Graphic */}
              <div className="absolute bottom-0 right-0 transform translate-y-1/4 translate-x-1/4 opacity-50 group-hover:opacity-80 transition-opacity duration-700">
                 <Zap size={200} className="text-[#C084FC]" strokeWidth={1} />
              </div>
           </div>

           {/* Feature 2 */}
           <div className="bg-[#2E1065] rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-center min-h-[400px] relative overflow-hidden text-white group">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-900/50 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
              <div className="relative z-10">
                 <h3 className="text-3xl font-bold mb-6">100% <br/>Hands-free</h3>
                 <p className="text-lg text-purple-200 mb-8 max-w-sm leading-relaxed">
                    No need to manage strategies manually. Bloom works in the background for you, optimizing your content.
                 </p>
                 <button className="w-fit px-6 py-3 rounded-full bg-white text-[#2E1065] font-semibold text-sm hover:bg-purple-50 transition-colors">
                    Explore Automation
                 </button>
              </div>
              {/* Abstract Graphic */}
              <div className="absolute top-0 right-0 transform -translate-y-1/4 translate-x-1/4 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                 <Globe size={200} className="text-purple-300" strokeWidth={1} />
              </div>
           </div>
        </div>
      </section>

      {/* Trusted By (Minimal) */}
      <section className="py-16 border-y border-purple-100 bg-white">
         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <p className="text-xs font-bold text-purple-300 uppercase tracking-widest md:mr-8">Backed by</p>
            <div className="flex flex-wrap justify-center gap-12 w-full md:w-auto">
              <span className="text-lg font-bold text-[#2E1065]">Fundamental Labs</span>
              <span className="text-lg font-bold text-[#2E1065]">KUCOIN</span>
              <span className="text-lg font-bold text-[#2E1065]">NGC Ventures</span>
              <span className="text-lg font-bold text-[#2E1065]">NxGen</span>
            </div>
         </div>
      </section>

      {/* Use Cases / Pricing */}
      <section id="pricing" className="py-24 px-4 max-w-7xl mx-auto">
         <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#2E1065] mb-4">Use cases</h2>
            <p className="text-purple-500 max-w-xl">Bloom offers a variety of use cases for developers, businesses and creatives seeking secure and beautiful integration.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pricing Card 1 */}
            <div className="bg-white rounded-3xl p-10 border border-purple-100 shadow-lg shadow-purple-900/5">
               <h3 className="text-2xl font-bold text-[#2E1065] mb-6">Business</h3>
               <p className="text-purple-500 mb-8 leading-relaxed">Boost user engagement by offering Bloom share, a secure file-backed stable platform allowing your customers to earn effortlessly.</p>
               
               <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-bold text-[#2E1065]">$12</span>
                  <span className="text-purple-300">/month</span>
               </div>

               <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-purple-700"><CheckCircle2 className="text-[#9333EA] w-5 h-5"/> Custom Branding</li>
                  <li className="flex items-center gap-3 text-purple-700"><CheckCircle2 className="text-[#9333EA] w-5 h-5"/> 50GB Storage</li>
                  <li className="flex items-center gap-3 text-purple-700"><CheckCircle2 className="text-[#9333EA] w-5 h-5"/> Priority Support</li>
               </ul>

               <a href="#" className="text-[#2E1065] font-semibold hover:text-[#9333EA] transition-colors flex items-center gap-2">
                  Learn more <span className="text-xl">→</span>
               </a>
            </div>

            {/* Pricing Card 2 (Image Placeholder style) */}
            <div className="bg-[#FAF5FF] rounded-3xl overflow-hidden relative min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E9D5FF] to-[#FAE8FF]"></div>
                {/* Decorative 3D Pillar/Building simulation */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-white/30 backdrop-blur-md border-t border-l border-white rounded-t-3xl shadow-2xl flex flex-col items-center justify-end p-8">
                   <div className="w-full grid grid-cols-3 gap-4 mb-4">
                      <div className="h-32 bg-white/50 rounded-full"></div>
                      <div className="h-32 bg-white/50 rounded-full"></div>
                      <div className="h-32 bg-white/50 rounded-full"></div>
                   </div>
                   <div className="w-full h-4 bg-white/50 rounded-full"></div>
                </div>
                <div className="absolute top-10 left-10 right-10">
                   <h3 className="text-2xl font-bold text-[#2E1065] mb-2">Treasury</h3>
                   <p className="text-purple-600">Enterprise grade management.</p>
                </div>
            </div>
         </div>
      </section>
    </>
  );
};