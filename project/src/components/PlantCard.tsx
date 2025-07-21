import React from 'react';
import { Plant } from '../types';
import { Sun, Droplets, Maximize, Heart, CheckCircle2 } from 'lucide-react';

interface PlantCardProps {
  plant: Plant;
}

export default function PlantCard({ plant }: PlantCardProps) {
  const [isSaved, setIsSaved] = React.useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-64">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setIsSaved(!isSaved)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md
                   hover:bg-gray-50 transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${isSaved ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{plant.name}</h3>
        <p className="text-sm text-gray-500 italic mb-4">{plant.scientificName}</p>
        
        <div className="flex gap-4 mb-4">
          <div className="flex items-center gap-1" title="Light Needs">
            <Sun className="w-4 h-4 text-gray-600" />
            <span className="text-sm">{plant.lightNeeds.replace('-', ' ')}</span>
          </div>
          <div className="flex items-center gap-1" title="Humidity Needs">
            <Droplets className="w-4 h-4 text-gray-600" />
            <span className="text-sm">{plant.humidity}</span>
          </div>
          <div className="flex items-center gap-1" title="Plant Size">
            <Maximize className="w-4 h-4 text-gray-600" />
            <span className="text-sm">{plant.size}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{plant.description}</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Key Benefits:</h4>
            <ul className="space-y-2">
              {plant.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900 capitalize">
                      {benefit.type.split('-').join(' ')}:
                    </span>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">Care Instructions:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {plant.careInstructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}