import React from 'react';
import { LightLevel, HumidityLevel, PlantSize, SpaceType, RoomType, RoomConditions } from '../types';
import { Sun, Droplets, Maximize, Building2, DoorOpen } from 'lucide-react';

interface RoomConditionsFormProps {
  onSubmit: (conditions: RoomConditions) => void;
}

const spaceTypes: { value: SpaceType; label: string }[] = [
  { value: 'house', label: 'House' },
  { value: 'office', label: 'Office' },
  { value: 'industry', label: 'Industry' },
  { value: 'retail', label: 'Retail' },
  { value: 'healthcare', label: 'Healthcare' }
];

const roomTypesBySpace: Record<SpaceType, { value: RoomType; label: string }[]> = {
  house: [
    { value: 'living-room', label: 'Living Room' },
    { value: 'bedroom', label: 'Bedroom' },
    { value: 'bathroom', label: 'Bathroom' },
    { value: 'kitchen', label: 'Kitchen' },
    { value: 'dining-room', label: 'Dining Room' }
  ],
  office: [
    { value: 'office-room', label: 'Office Room' },
    { value: 'meeting-room', label: 'Meeting Room' },
    { value: 'reception', label: 'Reception' },
    { value: 'workspace', label: 'Workspace' }
  ],
  industry: [
    { value: 'workspace', label: 'Workspace' },
    { value: 'office-room', label: 'Office Area' },
    { value: 'reception', label: 'Reception' }
  ],
  retail: [
    { value: 'lobby', label: 'Store Front' },
    { value: 'workspace', label: 'Work Area' }
  ],
  healthcare: [
    { value: 'reception', label: 'Reception' },
    { value: 'lobby', label: 'Waiting Area' },
    { value: 'office-room', label: 'Consultation Room' }
  ]
};

export default function RoomConditionsForm({ onSubmit }: RoomConditionsFormProps) {
  const [conditions, setConditions] = React.useState<RoomConditions>({
    spaceType: 'house',
    roomType: 'living-room',
    light: 'medium',
    humidity: 'medium',
    size: 'medium'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(conditions);
  };

  const availableRooms = roomTypesBySpace[conditions.spaceType];

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-6">
      <div>
        <label className="flex items-center gap-2 text-lg font-medium mb-2">
          <Building2 className="w-5 h-5" /> Space Type
        </label>
        <select
          value={conditions.spaceType}
          onChange={(e) => {
            const newSpaceType = e.target.value as SpaceType;
            setConditions({
              ...conditions,
              spaceType: newSpaceType,
              roomType: roomTypesBySpace[newSpaceType][0].value
            });
          }}
          className="w-full p-2 border rounded-lg bg-white"
        >
          {spaceTypes.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="flex items-center gap-2 text-lg font-medium mb-2">
          <DoorOpen className="w-5 h-5" /> Room Type
        </label>
        <select
          value={conditions.roomType}
          onChange={(e) => setConditions({ ...conditions, roomType: e.target.value as RoomType })}
          className="w-full p-2 border rounded-lg bg-white"
        >
          {availableRooms.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="flex items-center gap-2 text-lg font-medium mb-2">
          <Sun className="w-5 h-5" /> Light Level
        </label>
        <select
          value={conditions.light}
          onChange={(e) => setConditions({ ...conditions, light: e.target.value as LightLevel })}
          className="w-full p-2 border rounded-lg bg-white"
        >
          <option value="low">Low Light</option>
          <option value="medium">Medium Light</option>
          <option value="bright-indirect">Bright Indirect Light</option>
          <option value="direct">Direct Sunlight</option>
        </select>
      </div>

      <div>
        <label className="flex items-center gap-2 text-lg font-medium mb-2">
          <Droplets className="w-5 h-5" /> Humidity Level
        </label>
        <select
          value={conditions.humidity}
          onChange={(e) => setConditions({ ...conditions, humidity: e.target.value as HumidityLevel })}
          className="w-full p-2 border rounded-lg bg-white"
        >
          <option value="low">Low Humidity</option>
          <option value="medium">Medium Humidity</option>
          <option value="high">High Humidity</option>
        </select>
      </div>

      <div>
        <label className="flex items-center gap-2 text-lg font-medium mb-2">
          <Maximize className="w-5 h-5" /> Available Space
        </label>
        <select
          value={conditions.size}
          onChange={(e) => setConditions({ ...conditions, size: e.target.value as PlantSize })}
          className="w-full p-2 border rounded-lg bg-white"
        >
          <option value="small">Small (Tabletop)</option>
          <option value="medium">Medium (Floor Plant)</option>
          <option value="large">Large (Statement Plant)</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 
                 transition-colors font-medium"
      >
        Find Perfect Plants
      </button>
    </form>
  );
}