import React from 'react';
import { Search, Shield, Zap, Globe, ArrowRight, CheckCircle } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  language: 'english' | 'telugu';
}

export default function HomePage({ onNavigate, language }: HomePageProps) {
  const texts = {
    english: {
      hero: {
        title: 'Enhanced Pest Management System',
        subtitle: 'for Peanut Farming using Advanced CNN Technology',
        description: 'Detect, identify, and manage pest threats with 95.7% accuracy using our state-of-the-art AI system. Get instant treatment recommendations and protect your crops.',
        getStarted: 'Start Detection',
        learnMore: 'Learn More'
      },
      features: {
        title: 'Advanced Features',
        items: [
          {
            icon: Search,
            title: 'AI-Powered Detection',
            description: 'Advanced CNN model trained on 10,000+ images with 95.7% accuracy'
          },
          {
            icon: Shield,
            title: 'Comprehensive Treatment',
            description: 'Get instant chemical and organic treatment recommendations'
          },
          {
            icon: Zap,
            title: 'Real-Time Processing',
            description: 'Process images in under 3 seconds with consistent results'
          },
          {
            icon: Globe,
            title: 'Multi-Language Support',
            description: 'Available in English and Telugu for local farmers'
          }
        ]
      },
      stats: {
        title: 'Proven Results',
        items: [
          { number: '95.7%', label: 'Detection Accuracy' },
          { number: '12+', label: 'Pest Species' },
          { number: '3s', label: 'Processing Time' },
          { number: '₹500', label: 'Cost Savings per Acre' }
        ]
      },
      cta: {
        title: 'Ready to Protect Your Crops?',
        description: 'Join thousands of farmers using our AI-powered pest management system.',
        button: 'Start Free Detection'
      }
    },
    telugu: {
      hero: {
        title: 'మెరుగైన కీట నిర్వహణ వ్యవస్థ',
        subtitle: 'అధునాతన CNN సాంకేతికతను ఉపయోగించి వేర్దాలి వ్యవసాయం కోసం',
        description: '95.7% ఖచ్చితత్వంతో మా అత్యాధునిక AI వ్యవస్థను ఉపయోగించి కీట బెదిరింపులను గుర్తించండి, గుర్తించండి మరియు నిర్వహించండి. తక్షణ చికిత్స సిఫారసులను పొందండి మరియు మీ పంటలను రక్షించండి.',
        getStarted: 'గుర్తింపు ప్రారంభించండి',
        learnMore: 'మరింత తెలుసుకోండి'
      },
      features: {
        title: 'అధునాతన లక్షణాలు',
        items: [
          {
            icon: Search,
            title: 'AI-శక్తితో గుర్తింపు',
            description: '95.7% ఖచ్చితత్వంతో 10,000+ చిత్రాలపై శిక్షణ పొందిన అధునాతన CNN మోడల్'
          },
          {
            icon: Shield,
            title: 'సమగ్ర చికిత్స',
            description: 'తక్షణ రసాయన మరియు సేంద్రీయ చికిత్స సిఫారసులను పొందండి'
          },
          {
            icon: Zap,
            title: 'రియల్-టైమ్ ప్రాసెసింగ్',
            description: 'స్థిరమైన ఫలితాలతో 3 సెకన్లలోపు చిత్రాలను ప్రాసెస్ చేయండి'
          },
          {
            icon: Globe,
            title: 'బహుళ-భాషా మద్దతు',
            description: 'స్థానిక రైతుల కోసం ఆంగ్లం మరియు తెలుగులో అందుబాటులో ఉంది'
          }
        ]
      },
      stats: {
        title: 'నిరూపించబడిన ఫలితాలు',
        items: [
          { number: '95.7%', label: 'గుర్తింపు ఖచ్చితత్వం' },
          { number: '12+', label: 'కీట జాతులు' },
          { number: '3s', label: 'ప్రాసెసింగ్ సమయం' },
          { number: '₹500', label: 'ఎకరుకు ఖర్చు ఆదా' }
        ]
      },
      cta: {
        title: 'మీ పంటలను రక్షించడానికి సిద్ధంగా ఉన్నారా?',
        description: 'మా AI-శక్తితో కూడిన కీట నిర్వహణ వ్యవస్థను ఉపయోగిస్తున్న వేలాది రైతులలో చేరండి.',
        button: 'ఉచిత గుర్తింపు ప్రారంభించండి'
      }
    }
  };

  const text = texts[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {text.hero.title}
            <span className="block text-green-600 mt-2">{text.hero.subtitle}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {text.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => onNavigate('detection')}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg font-medium"
            >
              <Search className="w-5 h-5" />
              <span>{text.hero.getStarted}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors text-lg font-medium"
            >
              <span>{text.hero.learnMore}</span>
            </button>
          </div>
        </div>

        {/* Hero Image/Illustration */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <Search className="w-32 h-32 text-white" />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{text.features.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {text.features.items.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{text.stats.title}</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {text.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{text.cta.title}</h2>
          <p className="text-xl text-gray-600 mb-8">{text.cta.description}</p>
          <button
            onClick={() => onNavigate('detection')}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg font-medium"
          >
            <CheckCircle className="w-5 h-5" />
            <span>{text.cta.button}</span>
          </button>
        </div>
      </div>
    </div>
  );
}