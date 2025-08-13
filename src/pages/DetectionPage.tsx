import React, { useState } from 'react';
import RealTimeDetection from '../components/RealTimeDetection';
import DetectionResults from '../components/DetectionResults';
import { DetectionResult } from '../types/pest';

interface DetectionPageProps {
  language: 'english' | 'telugu';
}

export default function DetectionPage({ language }: DetectionPageProps) {
  const [detectionResult, setDetectionResult] = useState<DetectionResult | null>(null);

  const texts = {
    english: {
      title: 'Pest Detection & Analysis',
      subtitle: 'Upload an image of your crop to get instant pest identification and treatment recommendations'
    },
    telugu: {
      title: 'కీట గుర్తింపు మరియు విశ్లేషణ',
      subtitle: 'తక్షణ కీట గుర్తింపు మరియు చికిత్స సిఫారసుల కోసం మీ పంట చిత్రాన్ని అప్‌లోడ్ చేయండి'
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

        <div className="space-y-8">
          <RealTimeDetection
            onDetectionComplete={setDetectionResult}
            language={language}
          />

          {detectionResult && (
            <DetectionResults
              result={detectionResult}
              language={language}
            />
          )}
        </div>
      </div>
    </div>
  );
}