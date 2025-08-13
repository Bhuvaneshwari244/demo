import React, { useState, useEffect } from 'react';
import { Cloud, Thermometer, Droplets, Wind, AlertCircle } from 'lucide-react';
import { getCurrentWeather } from '../services/weatherService';
import { WeatherData } from '../types/pest';

interface WeatherMonitorProps {
  language: 'english' | 'telugu';
}

export default function WeatherMonitor({ language }: WeatherMonitorProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  const texts = {
    english: {
      title: 'Weather & Pest Risk',
      temperature: 'Temperature',
      humidity: 'Humidity',
      rainfall: 'Rainfall',
      windSpeed: 'Wind Speed',
      riskLevel: 'Pest Risk Level',
      recommendations: 'Recommendations',
      low: 'Low Risk',
      medium: 'Medium Risk',
      high: 'High Risk',
      loading: 'Loading weather data...'
    },
    telugu: {
      title: 'వాతావరణం మరియు కీట ప్రమాద స్థాయి',
      temperature: 'ఉష్ణోగ్రత',
      humidity: 'తేమ',
      rainfall: 'వర్షపాతం',
      windSpeed: 'గాలి వేగం',
      riskLevel: 'కీట ప్రమాద స్థాయి',
      recommendations: 'సిఫారసులు',
      low: 'తక్కువ ప్రమాదం',
      medium: 'మధ్యస్థ ప్రమాదం',
      high: 'అధిక ప్రమాదం',
      loading: 'వాతావరణ డేటా లోడ్ అవుతోంది...'
    }
  };

  const text = texts[language];

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getCurrentWeather();
        setWeather(data);
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRiskText = (level: string) => {
    switch (level) {
      case 'low': return text.low;
      case 'medium': return text.medium;
      case 'high': return text.high;
      default: return level;
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-4">{text.loading}</p>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Cloud className="w-8 h-8" />
          <h3 className="text-2xl font-bold">{text.title}</h3>
        </div>
      </div>

      <div className="p-6">
        {/* Weather Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <Thermometer className="w-6 h-6 text-orange-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600">{text.temperature}</p>
            <p className="text-xl font-bold text-orange-600">{weather.temperature}°C</p>
          </div>

          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <Droplets className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600">{text.humidity}</p>
            <p className="text-xl font-bold text-blue-600">{weather.humidity}%</p>
          </div>

          <div className="text-center p-4 bg-indigo-50 rounded-lg">
            <Cloud className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600">{text.rainfall}</p>
            <p className="text-xl font-bold text-indigo-600">{weather.rainfall}mm</p>
          </div>

          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Wind className="w-6 h-6 text-gray-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600">{text.windSpeed}</p>
            <p className="text-xl font-bold text-gray-600">{weather.windSpeed} km/h</p>
          </div>
        </div>

        {/* Risk Level */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-orange-500" />
            <span>{text.riskLevel}</span>
          </h4>
          <div className="flex items-center space-x-3">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${getRiskColor(weather.pestRiskLevel)}`}>
              {getRiskText(weather.pestRiskLevel)}
            </span>
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <h4 className="text-lg font-semibold mb-3">{text.recommendations}</h4>
          <ul className="space-y-2">
            {weather.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}