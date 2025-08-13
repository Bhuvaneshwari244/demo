import React, { useState } from 'react';
import { Menu, X, Home, Search, BarChart3, Cloud, Info } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  language: 'english' | 'telugu';
  onLanguageChange: (language: 'english' | 'telugu') => void;
}

export default function Navigation({ currentPage, onNavigate, language, onLanguageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const texts = {
    english: {
      brand: 'Enhanced Pest Management',
      home: 'Home',
      detection: 'Pest Detection',
      dashboard: 'Dashboard',
      weather: 'Weather',
      about: 'About'
    },
    telugu: {
      brand: 'మెరుగైన కీట నిర్వహణ',
      home: 'హోమ్',
      detection: 'కీట గుర్తింపు',
      dashboard: 'డాష్‌బోర్డ్',
      weather: 'వాతావరణం',
      about: 'గురించి'
    }
  };

  const text = texts[language];

  const menuItems = [
    { id: 'home', label: text.home, icon: Home },
    { id: 'detection', label: text.detection, icon: Search },
    { id: 'dashboard', label: text.dashboard, icon: BarChart3 },
    { id: 'weather', label: text.weather, icon: Cloud },
    { id: 'about', label: text.about, icon: Info }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">{text.brand}</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-green-50"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-md transition-colors ${
                      currentPage === item.id
                        ? 'text-green-600 bg-green-50'
                        : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}