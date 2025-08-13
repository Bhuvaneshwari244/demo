import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  language: 'english' | 'telugu';
  onLanguageChange: (language: 'english' | 'telugu') => void;
}

export default function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-5 h-5 text-gray-600" />
      <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => onLanguageChange('english')}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            language === 'english'
              ? 'bg-green-600 text-white'
              : 'text-gray-600 hover:text-green-600'
          }`}
        >
          English
        </button>
        <button
          onClick={() => onLanguageChange('telugu')}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            language === 'telugu'
              ? 'bg-green-600 text-white'
              : 'text-gray-600 hover:text-green-600'
          }`}
        >
          తెలుగు
        </button>
      </div>
    </div>
  );
}