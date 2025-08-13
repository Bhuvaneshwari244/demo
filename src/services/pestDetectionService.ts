import { Pest, DetectionResult } from '../types/pest';

// Comprehensive pest database with multilingual support
const PEST_DATABASE: Record<string, Pest> = {
  'aphis_craccivora': {
    id: 'aphis_craccivora',
    name: 'Cowpea Aphid',
    scientificName: 'Aphis craccivora',
    nameInTelugu: 'బంగారు లేత పురుగు',
    category: 'insect',
    severity: 'high',
    crops: ['peanut', 'cowpea', 'bean', 'soybean'],
    symptoms: {
      english: [
        'Yellowing of leaves',
        'Stunted growth',
        'Curled or distorted leaves',
        'Sticky honeydew on plants',
        'Sooty mold growth'
      ],
      telugu: [
        'ఆకులు పసుపు రంగులోకి మారడం',
        'మొక్క పెరుగుదల ఆగిపోవడం',
        'ఆకులు వంగిపోవడం లేదా వికృతం అవడం',
        'మొక్కలపై అంటుకునే తేనె లాంటి పదార్థం',
        'నల్లటి కట్టు రాబడం'
      ]
    },
    treatment: {
      immediate: {
        english: [
          'Remove heavily infested plants',
          'Spray with water to dislodge aphids',
          'Apply neem oil spray immediately'
        ],
        telugu: [
          'ఎక్కువగా దాడైన మొక్కలను తొలగించండి',
          'నీటితో చిలకరించి లేత పురుగులను తొలగించండి',
          'వెంటనే వేప నూనె పిచికారీ చేయండి'
        ]
      },
      chemical: [
        {
          name: 'Imidacloprid 17.8% SL',
          dosage: '0.5 ml per liter',
          cost: 150,
          safetyPeriod: '21 days before harvest',
          english: 'Apply during early morning or evening',
          telugu: 'ఉదయం లేదా సాయంకాలం పిచికారీ చేయండి'
        },
        {
          name: 'Dimethoate 30% EC',
          dosage: '2 ml per liter',
          cost: 120,
          safetyPeriod: '30 days before harvest',
          english: 'Avoid spraying during flowering',
          telugu: 'పూలు వచ్చిన సమయంలో పిచికారీ చేయవద్దు'
        }
      ],
      organic: {
        english: [
          'Neem oil spray (5ml per liter)',
          'Soap solution (10ml dish soap per liter)',
          'Release ladybird beetles',
          'Marigold intercropping'
        ],
        telugu: [
          'వేప నూనె పిచికారీ (లీటరుకు 5ml)',
          'సబ్బు నీరు (లీటరుకు 10ml)',
          'లేడీబర్డ్ కీటకాలను వదిలించండి',
          'మెరిగోల్డ్ మధ్య పంట వేయండి'
        ]
      }
    },
    prevention: {
      english: [
        'Regular monitoring of crops',
        'Maintain proper plant spacing',
        'Remove weeds around the field',
        'Use yellow sticky traps'
      ],
      telugu: [
        'పంటలను క్రమం తప్పకుండా పరిశీలించండి',
        'మొక్కల మధ్య సరైన దూరం ఉంచండి',
        'పొలం చుట్టూ కలుపు మొక్కలను తొలగించండి',
        'పసుపు రంగు అంటుకునే ఉచ్చులు ఉపయోగించండి'
      ]
    },
    images: [
      'https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg',
      'https://images.pexels.com/photos/4666749/pexels-photo-4666749.jpeg'
    ]
  },
  'cicadella_viridis': {
    id: 'cicadella_viridis',
    name: 'Green Leaf Hopper',
    scientificName: 'Cicadella viridis',
    nameInTelugu: 'ఆకుపచ్చ ఆకు దుంపుడు కీటకం',
    category: 'insect',
    severity: 'medium',
    crops: ['peanut', 'rice', 'sugarcane', 'wheat'],
    symptoms: {
      english: [
        'Yellow or brown spots on leaves',
        'Hopping insects on plants',
        'Reduced plant vigor',
        'Transmission of viral diseases'
      ],
      telugu: [
        'ఆకులపై పసుపు లేదా గోధుమ రంగు మచ్చలు',
        'మొక్కలపై దుంపుకునే కీటకాలు',
        'మొక్క బలహీనత',
        'వైరస్ వ్యాధుల వ్యాప్తి'
      ]
    },
    treatment: {
      immediate: {
        english: [
          'Remove infected plants immediately',
          'Use light traps during night',
          'Apply neem-based insecticide'
        ],
        telugu: [
          'సోకిన మొక్కలను వెంటనే తొలగించండి',
          'రాత్రి సమయంలో కాంతి ఉచ్చులు ఉపయోగించండి',
          'వేప ఆధారిత కీటకనాశకం చేయండి'
        ]
      },
      chemical: [
        {
          name: 'Thiamethoxam 25% WG',
          dosage: '0.2g per liter',
          cost: 200,
          safetyPeriod: '15 days before harvest',
          english: 'Apply with sticker for better adherence',
          telugu: 'మంచి అంటుకునేలా స్టిక్కర్ తో కలిపి చేయండి'
        }
      ],
      organic: {
        english: [
          'Neem cake application in soil',
          'Bordeaux mixture spray',
          'Encourage natural predators'
        ],
        telugu: [
          'మట్టిలో వేప పిండి వేయండి',
          'బోర్డో మిశ్రమం పిచికారీ',
          'సహజ శత్రు కీటకాలను ప్రోత్సహించండి'
        ]
      }
    },
    prevention: {
      english: [
        'Avoid over-watering',
        'Proper field sanitation',
        'Crop rotation with non-host plants',
        'Use resistant varieties'
      ],
      telugu: [
        'ఎక్కువ నీరు ఇవ్వకండి',
        'సరైన పొలం శుభ్రత',
        'వేరే రకం పంటలతో మలుపు సాగు',
        'నిరోధక రకాలను ఉపయోగించండి'
      ]
    },
    images: [
      'https://images.pexels.com/photos/4666750/pexels-photo-4666750.jpeg'
    ]
  },
  'spodoptera_litura': {
    id: 'spodoptera_litura',
    name: 'Tobacco Caterpillar',
    scientificName: 'Spodoptera litura',
    nameInTelugu: 'పొగాకు గొంగళిపురుగు',
    category: 'insect',
    severity: 'critical',
    crops: ['peanut', 'cotton', 'tobacco', 'tomato'],
    symptoms: {
      english: [
        'Large holes in leaves',
        'Defoliation of plants',
        'Green caterpillars with stripes',
        'Droppings on leaves'
      ],
      telugu: [
        'ఆకులలో పెద్ద రంధ్రాలు',
        'మొక్కల ఆకులు రాలిపోవడం',
        'చారలతో ఉన్న ఆకుపచ్చ గొంగళిపురుగులు',
        'ఆకులపై మలం'
      ]
    },
    treatment: {
      immediate: {
        english: [
          'Hand picking of caterpillars',
          'Install pheromone traps',
          'Remove egg masses from leaves'
        ],
        telugu: [
          'చేతితో గొంగళిపురుగులను తీయండి',
          'ఫెరోమోన్ ఉచ్చులు అమర్చండి',
          'ఆకుల నుండి గుడ్డు గుత్తులను తొలగించండి'
        ]
      },
      chemical: [
        {
          name: 'Chlorantraniliprole 18.5% SC',
          dosage: '0.4 ml per liter',
          cost: 300,
          safetyPeriod: '10 days before harvest',
          english: 'Most effective against young larvae',
          telugu: 'చిన్న గొంగళిపురుగులపై ఎక్కువ ప్రభావం'
        },
        {
          name: 'Spinetoram 11.7% SC',
          dosage: '0.9 ml per liter',
          cost: 350,
          safetyPeriod: '3 days before harvest',
          english: 'Safe for beneficial insects',
          telugu: 'మంచి కీటకాలకు హానికరం కాదు'
        }
      ],
      organic: {
        english: [
          'Bacillus thuringiensis spray',
          'Nuclear polyhedrosis virus (NPV)',
          'Neem seed kernel extract',
          'Encourage bird perches'
        ],
        telugu: [
          'బ్యాసిలస్ థురింజియెన్సిస్ పిచికారీ',
          'న్యూక్లియర్ పాలిహెడ్రోసిస్ వైరస్',
          'వేప గింజల రసం',
          'పక్షుల కూర్చు స్థలాలు ఏర్పాటు చేయండి'
        ]
      }
    },
    prevention: {
      english: [
        'Regular field monitoring',
        'Destroy crop residues',
        'Deep summer ploughing',
        'Use trap crops like castor'
      ],
      telugu: [
        'క్రమం తప్పకుండా పొలం పరిశీలన',
        'పంట అవశేషాలను నాశనం చేయండి',
        'వేసవిలో లోతుగా దున్నండి',
        'ఆముదం వంటి ఉచ్చు పంటలు వేయండి'
      ]
    },
    images: [
      'https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg'
    ]
  },
  'bemisia_tabaci': {
    id: 'bemisia_tabaci',
    name: 'Whitefly',
    scientificName: 'Bemisia tabaci',
    nameInTelugu: 'తెల్ల ఈగ',
    category: 'insect',
    severity: 'high',
    crops: ['peanut', 'cotton', 'tomato', 'brinjal'],
    symptoms: {
      english: [
        'Yellowing of leaves',
        'Sooty mold on leaves',
        'Small white flying insects',
        'Stunted plant growth',
        'Virus transmission'
      ],
      telugu: [
        'ఆకులు పసుపు రంగులోకి మారడం',
        'ఆకులపై నల్లని కట్టు',
        'చిన్న తెల్లని ఎగిరే కీటకాలు',
        'మొక్క పెరుగుదల ఆగిపోవడం',
        'వైరస్ వ్యాధుల వ్యాప్తి'
      ]
    },
    treatment: {
      immediate: {
        english: [
          'Use yellow sticky traps',
          'Remove heavily infested leaves',
          'Apply reflective mulch'
        ],
        telugu: [
          'పసుపు రంగు అంటుకునే ఉచ్చులు వాడండి',
          'ఎక్కువగా సోకిన ఆకులను తొలగించండి',
          'ప్రకాశవంతమైన మల్చ్ వేయండి'
        ]
      },
      chemical: [
        {
          name: 'Spiromesifen 22.9% SC',
          dosage: '1 ml per liter',
          cost: 280,
          safetyPeriod: '7 days before harvest',
          english: 'Effective against nymphs and adults',
          telugu: 'పిల్లలు మరియు పెద్దవాటిపై ప్రభావం'
        }
      ],
      organic: {
        english: [
          'Neem oil with soap solution',
          'Encourage Encarsia parasitoids',
          'Kaolin clay spray',
          'Remove alternate host plants'
        ],
        telugu: [
          'వేప నూనె మరియు సబ్బు మిశ్రమం',
          'ఎంకార్సియా పరాన్నజీవులను ప్రోత్సహించండి',
          'కావోలిన్ మట్టి పిచికారీ',
          'ప్రత్యామ్నాయ అతిథేయ మొక్కలను తొలగించండి'
        ]
      }
    },
    prevention: {
      english: [
        'Use resistant varieties',
        'Proper weed management',
        'Avoid excessive nitrogen',
        'Maintain field borders clean'
      ],
      telugu: [
        'నిరోధక రకాలను ఉపయోగించండి',
        'సరైన కలుపు నిర్వహణ',
        'ఎక్కువ నత్రజని ఇవ్వకండి',
        'పొలం అంచులను శుభ్రంగా ఉంచండి'
      ]
    },
    images: [
      'https://images.pexels.com/photos/4666752/pexels-photo-4666752.jpeg'
    ]
  }
};

// Generate consistent hash for image files
function generateImageHash(file: File): string {
  const str = `${file.name}_${file.size}_${file.lastModified}_${file.type}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(16);
}

// Simulate ML model prediction with consistent results
export async function detectPest(file: File, location?: GeolocationPosition): Promise<DetectionResult> {
  const startTime = Date.now();
  
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000));
  
  const imageHash = generateImageHash(file);
  
  // Use hash to consistently select the same pest for the same image
  const pestIds = Object.keys(PEST_DATABASE);
  const pestIndex = parseInt(imageHash.slice(-2), 16) % pestIds.length;
  const selectedPestId = pestIds[pestIndex];
  const selectedPest = PEST_DATABASE[selectedPestId];
  
  // Generate consistent confidence based on hash
  const confidenceBase = (parseInt(imageHash.slice(-4, -2), 16) % 30) + 70; // 70-99%
  const confidence = confidenceBase / 100;
  
  let locationData;
  if (location) {
    locationData = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      address: 'Field Location' // In real app, reverse geocode this
    };
  }
  
  const processingTime = Date.now() - startTime;
  
  const result: DetectionResult = {
    id: `detection_${Date.now()}_${imageHash}`,
    pest: selectedPest,
    confidence,
    location: locationData,
    timestamp: new Date(),
    imageHash,
    processingTime,
    modelVersion: 'v2.3.1',
    recommendations: [
      `Apply ${selectedPest.treatment.chemical[0]?.name || 'appropriate treatment'} immediately`,
      'Monitor the field daily for next 7 days',
      'Consider organic alternatives if severity is low',
      'Maintain proper field hygiene'
    ]
  };
  
  return result;
}

// Get pest information by ID
export function getPestById(id: string): Pest | undefined {
  return PEST_DATABASE[id];
}

// Get all pests
export function getAllPests(): Pest[] {
  return Object.values(PEST_DATABASE);
}

// Filter pests by crop
export function getPestsByCrop(crop: string): Pest[] {
  return Object.values(PEST_DATABASE).filter(pest => 
    pest.crops.includes(crop.toLowerCase())
  );
}

// Calculate treatment cost
export function calculateTreatmentCost(pest: Pest, area: number): number {
  const avgChemicalCost = pest.treatment.chemical.reduce((sum, treatment) => 
    sum + treatment.cost, 0) / pest.treatment.chemical.length;
  return Math.round(avgChemicalCost * area);
}