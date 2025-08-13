import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import DetectionPage from './pages/DetectionPage';
import DashboardPage from './pages/DashboardPage';
import WeatherPage from './pages/WeatherPage';
import AboutPage from './pages/AboutPage';

type PageType = 'home' | 'detection' | 'dashboard' | 'weather' | 'about';
type Language = 'english' | 'telugu';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [language, setLanguage] = useState<Language>('english');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} language={language} />;
      case 'detection':
        return <DetectionPage language={language} />;
      case 'dashboard':
        return <DashboardPage language={language} />;
      case 'weather':
        return <WeatherPage language={language} />;
      case 'about':
        return <AboutPage language={language} onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        language={language}
        onLanguageChange={setLanguage}
      />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;