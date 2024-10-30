import React, { useState } from 'react';
import { Star, MapPin, Phone, Globe, Clock } from 'lucide-react';
import { Business } from '../../types/business';
import BusinessDetail from '../BusinessDetail';

interface BusinessCardProps {
  business: Business;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  const [showDetail, setShowDetail] = useState(false);
  const defaultImage = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60';
  const imageUrl = business.photos_sample?.[0]?.photo_url_large || defaultImage;

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
        onClick={() => setShowDetail(true)}
      >
        <div className="relative h-48">
          <img
            src={imageUrl}
            alt={business.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = defaultImage;
            }}
          />
          {business.price_level && (
            <span className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full text-sm font-semibold">
              {business.price_level}
            </span>
          )}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {business.subtypes?.slice(0, 2).map((type, index) => (
              <span
                key={index}
                className="bg-black/50 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{business.name}</h3>
          
          <div className="flex items-center mb-2">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">
              {business.rating.toFixed(1)} ({business.review_count} reviews)
            </span>
          </div>

          <div className="flex items-start space-x-1 text-gray-600 text-sm mb-2">
            <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
            <p className="line-clamp-2">{business.full_address}</p>
          </div>

          {business.opening_status && (
            <div className="flex items-center text-sm mb-2">
              <Clock className="h-4 w-4 mr-1" />
              <span className={business.opening_status.toLowerCase().includes('closed') ? 'text-red-600' : 'text-green-600'}>
                {business.opening_status}
              </span>
            </div>
          )}

          <div className="flex justify-between mt-4">
            {business.website && (
              <a
                href={business.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 flex items-center text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <Globe className="h-4 w-4 mr-1" />
                Website
              </a>
            )}
            {business.phone_number && (
              <a
                href={`tel:${business.phone_number}`}
                className="text-teal-600 hover:text-teal-700 flex items-center text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <Phone className="h-4 w-4 mr-1" />
                Call
              </a>
            )}
          </div>
        </div>
      </div>

      {showDetail && (
        <BusinessDetail 
          business={business} 
          onClose={() => setShowDetail(false)} 
        />
      )}
    </>
  );
};

export default BusinessCard;