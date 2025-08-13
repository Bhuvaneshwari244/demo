import React from 'react';
import { CheckCircle, AlertTriangle, Clock, MapPin, Zap, DollarSign } from 'lucide-react';
import { DetectionResult } from '../types/pest';
import { calculateTreatmentCost } from '../services/pestDetectionService';

interface DetectionResultsProps {
  result: DetectionResult;
  language: 'english' | 'telugu';
}

export default function DetectionResults({ result, language }: DetectionResultsProps) {
  const { pest, confidence, timestamp, processingTime, modelVersion, location } = result;
  const costPerAcre = calculateTreatmentCost(pest, 1);

  const texts = {
    english: {
      detected: 'Detected Pest',
      confidence: 'Confidence',
      severity: 'Severity Level',
      location: 'Location',
      processed: 'Processed in',
      model: 'Model Version',
      symptoms: 'Symptoms',
      immediate: 'Immediate Actions',
      chemical: 'Chemical Treatment',
      organic: 'Organic Treatment',
      prevention: 'Prevention',
      cost: 'Treatment Cost',
      perAcre: 'per acre',
      dosage: 'Dosage',
      safety: 'Safety Period',
      low: 'Low',
      medium: 'Medium',
      high: 'High',
      critical: 'Critical'
    },
    telugu: {
      detected: 'గుర్తించబడిన కీటక దాడి',
      confidence: 'నమ్మకం',
      severity: 'తీవ్రత స్థాయి',
      location: 'స్థానం',
      processed: 'ప్రాసెస్ అయిన సమయం',
      model: 'మోడల్ వెర్షన్',
      symptoms: 'లక్షణాలు',
      immediate: 'తక్షణ చర్యలు',
      chemical: 'రసాయన చికిత్స',
      organic: 'సేంద్రీయ చికిత్స',
      prevention: 'నివారణ',
      cost: 'చికిత్స ఖర్చు',
      perAcre: 'ఎకరుకు',
      dosage: 'మోతాదు',
      safety: 'భద్రతా వ్యవధి',
      low: 'తక్కువ',
      medium: 'మధ్యస్థ',
      high: 'అధిక',
      critical: 'విపరీతమైన'
    }
  };

  const text = texts[language];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case 'low': return text.low;
      case 'medium': return text.medium;
      case 'high': return text.high;
      case 'critical': return text.critical;
      default: return severity;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <CheckCircle className="w-8 h-8" />
          <h3 className="text-2xl font-bold">{text.detected}</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-xl font-semibold">
              {language === 'english' ? pest.name : pest.nameInTelugu}
            </h4>
            <p className="text-green-100">{pest.scientificName}</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <p className="text-sm opacity-90">{text.confidence}</p>
              <p className="text-2xl font-bold">{Math.round(confidence * 100)}%</p>
            </div>
            <div className="text-center">
              <p className="text-sm opacity-90">{text.severity}</p>
              <span className={`px-2 py-1 rounded-full text-sm font-medium ${getSeverityColor(pest.severity)}`}>
                {getSeverityText(pest.severity)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Processing Info */}
      <div className="px-6 py-4 bg-gray-50 border-b">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{text.processed} {processingTime}ms</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4" />
            <span>{text.model} {modelVersion}</span>
          </div>
          {location && (
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{text.location}: {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Symptoms */}
          <div>
            <h5 className="text-lg font-semibold mb-3 flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              <span>{text.symptoms}</span>
            </h5>
            <ul className="space-y-2">
              {pest.symptoms[language].map((symptom, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Immediate Actions */}
          <div>
            <h5 className="text-lg font-semibold mb-3 text-red-600">{text.immediate}</h5>
            <ul className="space-y-2">
              {pest.treatment.immediate[language].map((action, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Chemical Treatment */}
        <div className="mt-8">
          <h5 className="text-lg font-semibold mb-4 text-blue-600">{text.chemical}</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pest.treatment.chemical.map((treatment, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h6 className="font-semibold text-gray-900 mb-2">{treatment.name}</h6>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{text.dosage}:</span>
                    <span className="font-medium">{treatment.dosage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{text.cost}:</span>
                    <span className="font-medium">₹{treatment.cost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{text.safety}:</span>
                    <span className="font-medium">{treatment.safetyPeriod}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {language === 'english' ? treatment.english : treatment.telugu}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="font-medium text-green-800">
                {text.cost}: ₹{costPerAcre} {text.perAcre}
              </span>
            </div>
          </div>
        </div>

        {/* Organic Treatment */}
        <div className="mt-8">
          <h5 className="text-lg font-semibold mb-3 text-green-600">{text.organic}</h5>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {pest.treatment.organic[language].map((treatment, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{treatment}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Prevention */}
        <div className="mt-8">
          <h5 className="text-lg font-semibold mb-3 text-purple-600">{text.prevention}</h5>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {pest.prevention[language].map((prevention, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{prevention}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}