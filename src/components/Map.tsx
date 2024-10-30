import React from 'react';
import { MapPin } from 'lucide-react';

interface MapProps {
  businesses: any[];
  onMarkerClick: (businessId: string) => void;
  selectedLocation: string;
}

export default function Map({ businesses, onMarkerClick, selectedLocation }: MapProps) {
  return (
    <div className="relative h-[600px] rounded-lg overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800">
        {/* Replace this div with your preferred map implementation */}
        <iframe
          src={`https://www.google.com/maps/embed/v1/search?key=YOUR_GOOGLE_MAPS_API_KEY&q=places+in+${selectedLocation}+bali&zoom=13`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
      
      <div className="absolute top-4 left-4 z-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
        <h3 className="font-semibold mb-2">Current Location</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{selectedLocation || 'All of Bali'}</p>
      </div>
    </div>
  );
}