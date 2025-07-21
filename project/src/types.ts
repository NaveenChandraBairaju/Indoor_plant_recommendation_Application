export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  lightNeeds: LightLevel;
  humidity: HumidityLevel;
  size: PlantSize;
  difficulty: Difficulty;
  description: string;
  careInstructions: string[];
  benefits: PlantBenefit[];
  suitableSpaces: SpaceType[];
  suitableRooms: RoomType[];
}

export type LightLevel = 'low' | 'medium' | 'bright-indirect' | 'direct';
export type HumidityLevel = 'low' | 'medium' | 'high';
export type PlantSize = 'small' | 'medium' | 'large';
export type Difficulty = 'beginner' | 'intermediate' | 'expert';

export type SpaceType = 'house' | 'office' | 'industry' | 'retail' | 'healthcare';

export type RoomType =
  | 'living-room'
  | 'bedroom'
  | 'bathroom'
  | 'kitchen'
  | 'dining-room'
  | 'office-room'
  | 'meeting-room'
  | 'reception'
  | 'workspace'
  | 'lobby';

export interface PlantBenefit {
  type: 'air-purification' | 'humidity-control' | 'aesthetic' | 'stress-reduction' | 'oxygen-production';
  description: string;
}

export interface RoomConditions {
  spaceType: SpaceType;
  roomType: RoomType;
  light: LightLevel;
  humidity: HumidityLevel;
  size: PlantSize;
}