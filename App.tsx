
import React, { useState, useMemo } from 'react';
import { PROMPTS } from './constants/prompts';
import { Prompt } from './types';
import TopicCard from './components/TopicCard';
import PromptDisplay from './components/PromptDisplay';

const App: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(PROMPTS.map((p) => p.category)))],
    []
  );

  const filteredPrompts = useMemo(() => {
    if (activeCategory === 'All') {
      return PROMPTS;
    }
    return PROMPTS.filter((prompt) => prompt.category === activeCategory);
  }, [activeCategory]);

  const handleSelectPrompt = (prompt: Prompt) => {
    setSelectedPrompt(prompt);
  };

  const handleClosePrompt = () => {
    setSelectedPrompt(null);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">
            Socratic Heat Transfer Tutor
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Your personal library of expert prompts to master Heat Transfer concepts. Choose a topic to start a guided learning session with your AI tutor.
          </p>
        </header>

        <div className="flex justify-center items-center flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrompts.map((prompt) => (
            <TopicCard
              key={prompt.id}
              prompt={prompt}
              onSelect={handleSelectPrompt}
            />
          ))}
        </div>
      </main>

      {selectedPrompt && (
        <PromptDisplay
          prompt={selectedPrompt}
          onClose={handleClosePrompt}
        />
      )}

      <footer className="text-center py-8 mt-8 border-t border-slate-200">
        <p className="text-slate-500">
          Powered by Generative AI & Socratic Inquiry
        </p>
      </footer>
    </div>
  );
};

export default App;
