import React from 'react';
import FarmDashboard from '../components/FarmDashboard';

interface DashboardPageProps {
  language: 'english' | 'telugu';
}

export default function DashboardPage({ language }: DashboardPageProps) {
  const texts = {
    english: {
      title: 'Farm Analytics Dashboard',
      subtitle: 'Monitor your farm health, track pest activity, and analyze trends'
    },
    telugu: {
      title: 'వ్యవసాయ విశ్లేషణ డాష్‌బోర్డ్',
      subtitle: 'మీ వ్యవసాయ ఆరోగ్యాన్ని పర్యవేక్షించండి, కీట కార్యకలాపాలను ట్రాక్ చేయండి మరియు ట్రెండ్‌లను విశ్లేషించండి'
    }
  };

  const text = texts[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{text.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{text.subtitle}</p>
        </div>

        <FarmDashboard language={language} />
      </div>
    </div>
  );
}