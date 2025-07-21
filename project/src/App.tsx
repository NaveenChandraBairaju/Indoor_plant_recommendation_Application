import React, { useState } from 'react';
import { Plant, RoomConditions } from './types';
import { plants } from './data/plants';
import RoomConditionsForm from './components/RoomConditionsForm';
import PlantCard from './components/PlantCard';
import { Leaf } from 'lucide-react';

function App() {
  const [recommendations, setRecommendations] = useState<Plant[]>([]);

  const findMatchingPlants = (conditions: RoomConditions) => {
    const matches = plants.filter(plant => {
      // Essential matches (must match these criteria)
      const spaceMatch = plant.suitableSpaces.includes(conditions.spaceType);
      const roomMatch = plant.suitableRooms.includes(conditions.roomType);
      
      if (!spaceMatch || !roomMatch) return false;

      // Calculate environmental compatibility score
      let score = 0;
      const maxScore = 3; // One point each for light, humidity, and size match

      // Light compatibility (including adjacent light levels)
      const lightLevels = ['low', 'medium', 'bright-indirect', 'direct'];
      const plantLightIndex = lightLevels.indexOf(plant.lightNeeds);
      const conditionLightIndex = lightLevels.indexOf(conditions.light);
      const lightDiff = Math.abs(plantLightIndex - conditionLightIndex);
      if (lightDiff === 0) score += 1;
      else if (lightDiff === 1) score += 0.5;

      // Humidity compatibility (including adjacent humidity levels)
      const humidityLevels = ['low', 'medium', 'high'];
      const plantHumidityIndex = humidityLevels.indexOf(plant.humidity);
      const conditionHumidityIndex = humidityLevels.indexOf(conditions.humidity);
      const humidityDiff = Math.abs(plantHumidityIndex - conditionHumidityIndex);
      if (humidityDiff === 0) score += 1;
      else if (humidityDiff === 1) score += 0.5;

      // Size compatibility (prefer exact or smaller sizes)
      const sizes = ['small', 'medium', 'large'];
      const plantSizeIndex = sizes.indexOf(plant.size);
      const conditionSizeIndex = sizes.indexOf(conditions.size);
      if (plantSizeIndex === conditionSizeIndex) score += 1;
      else if (plantSizeIndex < conditionSizeIndex) score += 0.5;

      // Return true if the plant meets minimum compatibility threshold
      return score >= (maxScore * 0.5); // At least 50% compatible
    });

    // Sort matches by compatibility score (most compatible first)
    matches.sort((a, b) => {
      const aScore = calculateCompatibilityScore(a, conditions);
      const bScore = calculateCompatibilityScore(b, conditions);
      return bScore - aScore;
    });

    setRecommendations(matches);
  };

  const calculateCompatibilityScore = (plant: Plant, conditions: RoomConditions): number => {
    let score = 0;

    // Space and room type match (essential criteria)
    if (plant.suitableSpaces.includes(conditions.spaceType)) score += 2;
    if (plant.suitableRooms.includes(conditions.roomType)) score += 2;

    // Light compatibility
    if (plant.lightNeeds === conditions.light) score += 2;
    
    // Humidity compatibility
    if (plant.humidity === conditions.humidity) score += 2;
    
    // Size compatibility
    if (plant.size === conditions.size) score += 2;

    return score;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-emerald-600" />
            <h1 className="text-2xl font-bold text-gray-900">Plant Perfect</h1>
          </div>
          <p className="mt-2 text-gray-600">Find the perfect plants for your space</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-[400px,1fr] gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm h-fit">
            <h2 className="text-xl font-semibold mb-6">Your Space Details</h2>
            <RoomConditionsForm onSubmit={findMatchingPlants} />
          </div>

          <div>
            {recommendations.length > 0 ? (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">
                  Recommended Plants ({recommendations.length})
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {recommendations.map(plant => (
                    <PlantCard key={plant.id} plant={plant} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Leaf className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h2 className="text-xl font-medium text-gray-900 mb-2">
                  Ready to find your perfect plant?
                </h2>
                <p className="text-gray-600">
                  Tell us about your space and we'll recommend the best plants that will thrive in your environment.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;