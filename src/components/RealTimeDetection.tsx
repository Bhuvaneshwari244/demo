import React, { useState, useCallback, useRef } from 'react';
import { Upload, Camera, MapPin, Clock, Zap, AlertTriangle } from 'lucide-react';
import { detectPest } from '../services/pestDetectionService';
import { DetectionResult } from '../types/pest';

interface RealTimeDetectionProps {
  onDetectionComplete: (result: DetectionResult) => void;
  language: 'english' | 'telugu';
}

export default function RealTimeDetection({ onDetectionComplete, language }: RealTimeDetectionProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const texts = {
    english: {
      title: 'Real-Time Pest Detection',
      subtitle: 'Upload image or take photo for instant AI analysis',
      dragText: 'Drag and drop your image here, or',
      browse: 'browse',
      orText: 'or',
      takePhoto: 'Take Photo',
      processing: 'Processing...',
      analyzing: 'Analyzing image with AI',
      selected: 'Selected:',
      detect: 'Detect Pest',
      location: 'Location detected',
      requirements: 'Requirements: JPG, PNG, WebP (max 5MB)'
    },
    telugu: {
      title: 'రియల్ టైమ్ కీట దాడి గుర్తింపు',
      subtitle: 'తక్షణ AI విశ్లేషణ కోసం చిత్రం అప్‌లోడ్ చేయండి లేదా ఫోటో తీయండి',
      dragText: 'మీ చిత్రాన్ని ఇక్కడ లాగి వదలండి, లేదా',
      browse: 'బ్రౌజ్ చేయండి',
      orText: 'లేదా',
      takePhoto: 'ఫోటో తీయండి',
      processing: 'ప్రాసెసింగ్...',
      analyzing: 'AI తో చిత్రం విశ్లేషిస్తోంది',
      selected: 'ఎంచుకోబడింది:',
      detect: 'కీట దాడిని గుర్తించండి',
      location: 'స్థానం గుర్తించబడింది',
      requirements: 'అవసరాలు: JPG, PNG, WebP (గరిష్టం 5MB)'
    }
  };

  const text = texts[language];

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
      }
    }
  }, []);

  const validateFile = (file: File): boolean => {
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!validTypes.includes(file.type)) {
      alert('Please select a valid image file (JPG, PNG, WebP)');
      return false;
    }

    if (file.size > maxSize) {
      alert('File size should be less than 5MB');
      return false;
    }

    return true;
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && validateFile(file)) {
      setSelectedFile(file);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => setLocation(position),
        (error) => console.error('Error getting location:', error)
      );
    }
  };

  const handleDetection = async () => {
    if (!selectedFile) return;

    setIsProcessing(true);
    
    try {
      // Get location if not already obtained
      if (!location) {
        await new Promise<void>((resolve) => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLocation(position);
              resolve();
            },
            () => resolve() // Continue even if location fails
          );
        });
      }

      const result = await detectPest(selectedFile, location || undefined);
      onDetectionComplete(result);
    } catch (error) {
      console.error('Detection error:', error);
      alert('Detection failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Zap className="w-8 h-8 text-green-600" />
          <h2 className="text-3xl font-bold text-gray-900">{text.title}</h2>
        </div>
        <p className="text-gray-600">{text.subtitle}</p>
      </div>

      <div
        className={`relative border-2 border-dashed rounded-xl p-8 transition-all duration-300 ${
          dragActive
            ? 'border-green-500 bg-green-50'
            : 'border-gray-300 hover:border-green-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="text-center">
          {!selectedFile ? (
            <>
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg text-gray-600 mb-4">
                {text.dragText}{' '}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  {text.browse}
                </button>
              </p>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <span className="text-gray-400">{text.orText}</span>
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Camera className="w-5 h-5" />
                <span>{text.takePhoto}</span>
              </button>
            </>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <Upload className="w-5 h-5" />
                <span className="font-medium">{text.selected}</span>
              </div>
              <p className="text-gray-900 font-medium">{selectedFile.name}</p>
              <p className="text-sm text-gray-500">
                {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
              </p>
              
              {location && (
                <div className="flex items-center justify-center space-x-2 text-blue-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{text.location}</span>
                </div>
              )}

              <button
                onClick={handleDetection}
                disabled={isProcessing}
                className="inline-flex items-center space-x-2 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>{text.processing}</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-5 h-5" />
                    <span>{text.detect}</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {isProcessing && (
        <div className="mt-6 bg-blue-50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            <div>
              <p className="font-medium text-blue-900">{text.analyzing}</p>
              <div className="flex items-center space-x-2 mt-1">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-700">Processing with CNN v2.3.1</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <p className="text-xs text-gray-500 text-center mt-4">{text.requirements}</p>
    </div>
  );
}