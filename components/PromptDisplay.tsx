
import React, { useState, useEffect } from 'react';
import { Prompt } from '../types';
import { CopyIcon, CheckIcon, CloseIcon } from './icons';

interface PromptDisplayProps {
  prompt: Prompt;
  onClose: () => void;
}

const PromptDisplay: React.FC<PromptDisplayProps> = ({ prompt, onClose }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt).then(() => {
      setIsCopied(true);
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col relative animate-slide-up">
        <div className="flex justify-between items-center p-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800">{prompt.title}</h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Close"
          >
            <CloseIcon className="w-7 h-7" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto flex-grow">
          <p className="text-sm text-slate-600 mb-4">Copy the prompt below and paste it into your preferred AI chatbot (like Gemini) to begin your Socratic learning session.</p>
          <pre className="bg-slate-100 rounded-lg p-4 text-slate-800 whitespace-pre-wrap font-mono text-sm leading-relaxed">
            {prompt.prompt}
          </pre>
        </div>
        <div className="p-6 border-t border-slate-200">
          <button
            onClick={handleCopy}
            className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out ${
              isCopied
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isCopied ? (
              <>
                <CheckIcon className="w-5 h-5 mr-2" />
                Copied to Clipboard!
              </>
            ) : (
              <>
                <CopyIcon className="w-5 h-5 mr-2" />
                Copy Prompt
              </>
            )}
          </button>
        </div>
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.4s ease-out; }
      `}</style>
    </div>
  );
};

export default PromptDisplay;
