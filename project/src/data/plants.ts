import { Plant, PlantBenefit } from '../types';

const airPurificationBenefit: PlantBenefit = {
  type: 'air-purification',
  description: 'Removes common indoor air pollutants like formaldehyde and benzene'
};

const humidityControlBenefit: PlantBenefit = {
  type: 'humidity-control',
  description: 'Helps maintain optimal humidity levels through natural transpiration'
};

const aestheticBenefit: PlantBenefit = {
  type: 'aesthetic',
  description: 'Adds natural beauty and creates a calming atmosphere'
};

const stressReductionBenefit: PlantBenefit = {
  type: 'stress-reduction',
  description: 'Proven to reduce stress levels and improve mood'
};

const oxygenProductionBenefit: PlantBenefit = {
  type: 'oxygen-production',
  description: 'Excellent oxygen producer, improving air quality day and night'
};

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Snake Plant',
    scientificName: 'Sansevieria trifasciata',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355',
    lightNeeds: 'low',
    humidity: 'low',
    size: 'medium',
    difficulty: 'beginner',
    description: 'One of the most tolerant and low-maintenance indoor plants. Perfect for beginners.',
    careInstructions: [
      'Water every 2-6 weeks',
      'Tolerates low light but grows faster in bright indirect light',
      'Can survive in any humidity level',
      'Rarely needs repotting'
    ],
    benefits: [airPurificationBenefit, oxygenProductionBenefit],
    suitableSpaces: ['house', 'office', 'healthcare', 'retail', 'industry'],
    suitableRooms: ['bedroom', 'office-room', 'living-room', 'workspace', 'reception', 'meeting-room']
  },
  {
    id: '2',
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b',
    lightNeeds: 'bright-indirect',
    humidity: 'high',
    size: 'large',
    difficulty: 'intermediate',
    description: 'Known for its stunning split leaves, this tropical plant makes a dramatic statement.',
    careInstructions: [
      'Water when top 2-3 inches of soil is dry',
      'Prefers bright, indirect light',
      'Enjoys high humidity',
      'Regular misting recommended'
    ],
    benefits: [aestheticBenefit, humidityControlBenefit],
    suitableSpaces: ['house', 'office', 'healthcare'],
    suitableRooms: ['living-room', 'reception', 'lobby', 'workspace']
  },
  {
    id: '3',
    name: 'Peace Lily',
    scientificName: 'Spathiphyllum',
    image: 'https://images.unsplash.com/photo-1593691512429-5bb858f487b1',
    lightNeeds: 'medium',
    humidity: 'medium',
    size: 'medium',
    difficulty: 'beginner',
    description: 'Elegant white flowers and glossy leaves make this a popular choice for homes and offices.',
    careInstructions: [
      'Keep soil consistently moist',
      'Tolerates low to medium light',
      'Drooping leaves indicate need for water',
      'Clean leaves monthly'
    ],
    benefits: [airPurificationBenefit, humidityControlBenefit, stressReductionBenefit],
    suitableSpaces: ['house', 'office', 'healthcare', 'retail'],
    suitableRooms: ['living-room', 'office-room', 'reception', 'bedroom', 'workspace', 'lobby']
  },
  {
    id: '4',
    name: 'ZZ Plant',
    scientificName: 'Zamioculcas zamiifolia',
    image: 'https://images.unsplash.com/photo-1632207691143-007394d7d83c',
    lightNeeds: 'low',
    humidity: 'low',
    size: 'medium',
    difficulty: 'beginner',
    description: 'Extremely hardy and drought-tolerant, perfect for low-light environments.',
    careInstructions: [
      'Water when soil is completely dry',
      'Tolerates very low light conditions',
      'Can handle dry air',
      'Very resistant to pests'
    ],
    benefits: [airPurificationBenefit, stressReductionBenefit],
    suitableSpaces: ['house', 'office', 'industry', 'retail', 'healthcare'],
    suitableRooms: ['office-room', 'workspace', 'reception', 'meeting-room', 'living-room']
  },
  {
    id: '5',
    name: 'Pothos',
    scientificName: 'Epipremnum aureum',
    image: 'https://images.unsplash.com/photo-1600411833114-5c4467c13053',
    lightNeeds: 'medium',
    humidity: 'medium',
    size: 'small',
    difficulty: 'beginner',
    description: 'Fast-growing vine with heart-shaped leaves, excellent for hanging baskets or climbing.',
    careInstructions: [
      'Water when top inch of soil is dry',
      'Adaptable to various light conditions',
      'Can grow in water or soil',
      'Trim regularly to control growth'
    ],
    benefits: [airPurificationBenefit, aestheticBenefit],
    suitableSpaces: ['house', 'office', 'retail', 'healthcare'],
    suitableRooms: ['living-room', 'kitchen', 'office-room', 'workspace', 'reception']
  },
  {
    id: '6',
    name: 'Chinese Evergreen',
    scientificName: 'Aglaonema',
    image: 'https://images.unsplash.com/photo-1600411832248-5b1d3b7c6995',
    lightNeeds: 'low',
    humidity: 'medium',
    size: 'small',
    difficulty: 'beginner',
    description: 'Decorative plant with beautiful variegated leaves, perfect for indoor spaces.',
    careInstructions: [
      'Keep soil lightly moist',
      'Grows well in low light',
      'Prefers warm temperatures',
      'Avoid cold drafts'
    ],
    benefits: [airPurificationBenefit, aestheticBenefit],
    suitableSpaces: ['house', 'office', 'healthcare'],
    suitableRooms: ['bedroom', 'office-room', 'living-room', 'workspace']
  }
];