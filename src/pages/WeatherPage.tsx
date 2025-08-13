import React from 'react';
import WeatherMonitor from '../components/WeatherMonitor';

interface WeatherPageProps {
  language: 'english' | 'telugu';
}

export default function WeatherPage({ language }: WeatherPageProps) {
  const texts = {
    english: {
      title: 'Weather Monitoring & Risk Assessment',
      subtitle: 'Real-time weather data with pest risk analysis and forecasting'
    },
    telugu: {
      title: 'వాతావరణ పర్యవేక్షణ మరియు ప్రమాద అంచనా',
      subtitle: 'కీట ప్రమాద విశ్లేషణ మరియు అంచనాతో రియల్-టైమ్ వాతావరణ డేటా'
    }
  };

  const text = texts[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{text.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{text.subtitle}</p>
        </div>

        <WeatherMonitor language={language} />
      </div>
    </div>
  );
}