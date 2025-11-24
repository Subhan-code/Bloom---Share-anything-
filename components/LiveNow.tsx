import React, { useState, useRef } from 'react';
import { UploadCloud, File, X, ArrowLeft, ShieldCheck, Smartphone, Check, Copy } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export const FileSharing: React.FC<Props> = ({ onBack }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      simulateUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      simulateUpload(e.target.files[0]);
    }
  };

  const simulateUpload = (file: File) => {
    setFile(file);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('https://bloom.io/f/x9s8z7k2');
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

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#2E1065] mb-4">Upload Files</h2>
        <p className="text-purple-500">Secure, encrypted, and ephemeral. Up to 2GB free.</p>
      </div>

      {!file ? (
        <div 
          className={`relative border-2 border-dashed rounded-[2.5rem] h-96 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer bg-white
            ${isDragging ? 'border-[#7C3AED] bg-[#F3E8FF]' : 'border-purple-200 hover:border-[#7C3AED] hover:shadow-xl hover:shadow-purple-200/50'}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input type="file" className="hidden" ref={fileInputRef} onChange={handleFileSelect} />
          
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-colors ${isDragging ? 'bg-white' : 'bg-[#FAF5FF]'}`}>
            <UploadCloud size={40} className={isDragging ? 'text-[#7C3AED]' : 'text-purple-300'} />
          </div>
          <h3 className="text-xl font-bold text-[#2E1065] mb-2">Drop your files here</h3>
          <p className="text-purple-400">or click to browse</p>
        </div>
      ) : (
        <div className="bg-white border border-purple-100 rounded-[2.5rem] p-10 shadow-xl shadow-purple-100/50">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#F3E8FF] rounded-2xl flex items-center justify-center text-[#7C3AED]">
                <File size={32} />
              </div>
              <div>
                <h4 className="text-[#2E1065] font-bold text-lg">{file.name}</h4>
                <p className="text-sm text-purple-400">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <button 
              onClick={() => setFile(null)}
              className="p-3 hover:bg-purple-50 rounded-full text-purple-300 hover:text-[#2E1065] transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="relative h-3 bg-[#F3E8FF] rounded-full overflow-hidden mb-4">
            <div 
              className="absolute top-0 left-0 h-full bg-[#7C3AED] transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="flex justify-between text-sm font-medium mb-10">
            <span className="text-[#7C3AED]">{progress < 100 ? 'Uploading...' : 'Complete'}</span>
            <span className="text-[#2E1065]">{progress}%</span>
          </div>

          {progress === 100 && (
            <div className="bg-[#FAF5FF] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-purple-200">
               <code className="text-[#2E1065] font-mono text-sm break-all">https://bloom.io/f/x9s8z7k2</code>
               <button 
                 onClick={handleCopy}
                 className="bg-[#2E1065] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#4C1D95] transition-colors w-full md:w-auto flex items-center justify-center gap-2 min-w-[160px] shadow-lg shadow-purple-900/20"
               >
                 {copied ? <Check size={18} className="text-green-400"/> : <Copy size={18} />}
                 {copied ? 'Copied!' : 'Copy Link'}
               </button>
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        <div className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-white border border-white shadow-lg shadow-purple-100/50">
           <ShieldCheck className="text-[#7C3AED] mb-4" size={32} />
           <h4 className="text-[#2E1065] font-bold mb-2">Encrypted</h4>
           <p className="text-sm text-purple-400">Zero-knowledge encryption standard.</p>
        </div>
        <div className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-white border border-white shadow-lg shadow-purple-100/50">
           <UploadCloud className="text-[#7C3AED] mb-4" size={32} />
           <h4 className="text-[#2E1065] font-bold mb-2">Global CDN</h4>
           <p className="text-sm text-purple-400">Lightning fast delivery worldwide.</p>
        </div>
        <div className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-white border border-white shadow-lg shadow-purple-100/50">
           <Smartphone className="text-[#7C3AED] mb-4" size={32} />
           <h4 className="text-[#2E1065] font-bold mb-2">Mobile First</h4>
           <p className="text-sm text-purple-400">Optimized for every screen size.</p>
        </div>
      </div>
    </div>
  );
};