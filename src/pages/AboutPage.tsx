import React from 'react';
import { Brain, Target, Award, Users, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  language: 'english' | 'telugu';
  onNavigate: (page: string) => void;
}

export default function AboutPage({ language, onNavigate }: AboutPageProps) {
  const texts = {
    english: {
      title: 'About Enhanced Pest Management System',
      subtitle: 'Advanced AI-powered solution for protecting peanut crops',
      problem: {
        title: 'The Problem',
        description: 'Pest infestations cause 20-40% crop losses in peanut farming annually. Traditional identification methods are slow, often inaccurate, and require expert knowledge that many farmers lack.'
      },
      solution: {
        title: 'Our Solution',
        description: 'We developed a state-of-the-art Convolutional Neural Network (CNN) that can instantly identify 12+ common peanut pests with 95.7% accuracy, providing immediate treatment recommendations in multiple languages.'
      },
      features: [
        {
          icon: Brain,
          title: 'Advanced CNN Architecture',
          description: 'Deep learning model trained on 10,000+ high-quality pest images'
        },
        {
          icon: Target,
          title: '95.7% Accuracy',
          description: 'Validated accuracy across 12 major peanut pest species'
        },
        {
          icon: Award,
          title: 'Real-time Processing',
          description: 'Results delivered in under 3 seconds with consistent outcomes'
        },
        {
          icon: Users,
          title: 'Farmer-Friendly',
          description: 'Multi-language support (English/Telugu) with simple interface'
        }
      ],
      methodology: {
        title: 'Research Methodology',
        steps: [
          'Data Collection: Gathered 10,000+ labeled pest images',
          'Model Training: Trained CNN with data augmentation techniques',
          'Validation: Tested on separate dataset achieving 95.7% accuracy',
          'Deployment: Optimized for mobile and web platforms'
        ]
      },
      results: {
        title: 'Key Results',
        metrics: [
          { label: 'Detection Accuracy', value: '95.7%' },
          { label: 'Processing Speed', value: '< 3 seconds' },
          { label: 'Pest Species Covered', value: '12+' },
          { label: 'Languages Supported', value: '2' }
        ]
      },
      impact: {
        title: 'Expected Impact',
        description: 'Our system can help farmers reduce crop losses by up to 30%, save ₹500-1000 per acre in treatment costs, and improve overall farm productivity through early pest detection and targeted treatment.',
        cta: 'Try Detection Now'
      }
    },
    telugu: {
      title: 'మెరుగైన కీట నిర్వహణ వ్యవస్థ గురించి',
      subtitle: 'వేర్దాలి పంటలను రక్షించడానికి అధునాతన AI-శక్తితో కూడిన పరిష్కారం',
      problem: {
        title: 'సమస్య',
        description: 'వేర్దాలి వ్యవసాయంలో కీట దాడులు సంవత్సరానికి 20-40% పంట నష్టాలకు కారణం అవుతాయి. సాంప్రదాయ గుర్తింపు పద్ధతులు నెమ్మదిగా ఉంటాయి, తరచుగా తప్పుగా ఉంటాయి మరియు చాలా రైతులకు లేని నిపుణుల జ్ఞానం అవసరం.'
      },
      solution: {
        title: 'మా పరిష్కారం',
        description: 'మేము 95.7% ఖచ్చితత్వంతో 12+ సాధారణ వేర్దాలి కీటకాలను తక్షణమే గుర్తించగల అత్యాధునిక కన్వల్యూషనల్ న్యూరల్ నెట్‌వర్క్ (CNN)ను అభివృద్ధి చేసాము, బహుళ భాషలలో తక్షణ చికిత్స సిఫారసులను అందిస్తోంది.'
      },
      features: [
        {
          icon: Brain,
          title: 'అధునాతన CNN ఆర్కిటెక్చర్',
          description: '10,000+ అధిక-నాణ్యత కీట చిత్రాలపై శిక్షణ పొందిన డీప్ లెర్నింగ్ మోడల్'
        },
        {
          icon: Target,
          title: '95.7% ఖచ్చితత్వం',
          description: '12 ప్రధాన వేర్దాలి కీట జాతులలో ధృవీకరించబడిన ఖచ్చితత్వం'
        },
        {
          icon: Award,
          title: 'రియల్-టైమ్ ప్రాసెసింగ్',
          description: 'స్థిరమైన ఫలితాలతో 3 సెకన్లలోపు ఫలితాలు అందించబడతాయి'
        },
        {
          icon: Users,
          title: 'రైతు-స్నేహపూర్వక',
          description: 'సరళమైన ఇంటర్‌ఫేస్‌తో బహుళ-భాషా మద్దతు (ఆంగ్లం/తెలుగు)'
        }
      ],
      methodology: {
        title: 'పరిశోధనా పద్ధతి',
        steps: [
          'డేటా సేకరణ: 10,000+ లేబుల్ చేయబడిన కీట చిత్రాలను సేకరించడం',
          'మోడల్ శిక్షణ: డేటా వృద్ధి పద్ధతులతో CNN శిక్షణ',
          'ధృవీకరణ: 95.7% ఖచ్చితత్వాన్ని సాధించిన ప్రత్యేక డేటాసెట్‌పై పరీక్ష',
          'విస్తరణ: మొబైల్ మరియు వెబ్ ప్లాట్‌ఫారమ్‌ల కోసం అనుకూలీకరణ'
        ]
      },
      results: {
        title: 'ముఖ్య ఫలితాలు',
        metrics: [
          { label: 'గుర్తింపు ఖచ్చితత్వం', value: '95.7%' },
          { label: 'ప్రాసెసింగ్ వేగం', value: '< 3 సెకన్లు' },
          { label: 'కవర్ చేయబడిన కీట జాతులు', value: '12+' },
          { label: 'మద్దతు ఉన్న భాషలు', value: '2' }
        ]
      },
      impact: {
        title: 'అంచనా వేసిన ప్రభావం',
        description: 'మా వ్యవస్థ రైతులకు పంట నష్టాలను 30% వరకు తగ్గించడంలో, చికిత్స ఖర్చులలో ఎకరుకు ₹500-1000 ఆదా చేయడంలో మరియు ముందస్తు కీట గుర్తింపు మరియు లక్ష్య చికిత్స ద్వారా మొత్తం వ్యవసాయ ఉత్పాదకతను మెరుగుపరచడంలో సహాయపడుతుంది.',
        cta: 'ఇప్పుడే గుర్తింపు ప్రయత్నించండి'
      }
    }
  };

  const text = texts[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{text.title}</h1>
          <p className="text-xl text-gray-600">{text.subtitle}</p>
        </div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4">{text.problem.title}</h2>
            <p className="text-red-700">{text.problem.description}</p>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-4">{text.solution.title}</h2>
            <p className="text-green-700">{text.solution.description}</p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {text.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Methodology */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{text.methodology.title}</h2>
          <div className="space-y-4">
            {text.methodology.steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">{text.results.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {text.results.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className="text-green-100">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact & CTA */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{text.impact.title}</h2>
          <p className="text-gray-600 mb-8 text-lg">{text.impact.description}</p>
          <button
            onClick={() => onNavigate('detection')}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg font-medium"
          >
            <span>{text.impact.cta}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}