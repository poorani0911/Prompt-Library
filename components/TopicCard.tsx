
import React from 'react';
import { Prompt } from '../types';

interface TopicCardProps {
  prompt: Prompt;
  onSelect: (prompt: Prompt) => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ prompt, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(prompt)}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer overflow-hidden transform hover:-translate-y-1"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{prompt.title}</h3>
        <p className="text-slate-600 text-sm">{prompt.description}</p>
      </div>
      <div className="bg-blue-500 h-2"></div>
    </div>
  );
};

export default TopicCard;
