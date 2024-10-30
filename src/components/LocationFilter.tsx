import React from 'react';
import { MapPin } from 'lucide-react';

const locations = {
  areas: [
    { name: 'Seminyak', count: 245 },
    { name: 'Canggu', count: 189 },
    { name: 'Ubud', count: 167 },
    { name: 'Kuta', count: 156 },
    { name: 'Uluwatu', count: 98 },
    { name: 'Nusa Dua', count: 87 },
    { name: 'Jimbaran', count: 76 },
    { name: 'Sanur', count: 65 }
  ],
  cities: [
    { name: 'Denpasar', count: 312 },
    { name: 'Badung', count: 289 },
    { name: 'Gianyar', count: 178 },
    { name: 'Tabanan', count: 89 },
    { name: 'Buleleng', count: 76 }
  ]
};

interface LocationFilterProps {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
}

export default function LocationFilter({ selectedLocation, onLocationChange }: LocationFilterProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-teal-500" />
          Popular Areas
        </h3>
        <div className="space-y-2">
          {locations.areas.map((area) => (
            <button
              key={area.name}
              onClick={() => onLocationChange(area.name)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedLocation === area.name
                  ? 'bg-teal-500 text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <span className="flex items-center justify-between">
                <span>{area.name}</span>
                <span className="text-sm opacity-75">{area.count}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Cities</h3>
        <div className="space-y-2">
          {locations.cities.map((city) => (
            <button
              key={city.name}
              onClick={() => onLocationChange(city.name)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedLocation === city.name
                  ? 'bg-teal-500 text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <span className="flex items-center justify-between">
                <span>{city.name}</span>
                <span className="text-sm opacity-75">{city.count}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}