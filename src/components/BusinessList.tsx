import React from 'react';
import { Business } from '../types/business';
import { Card } from "./ui/card";
import { Star, MapPin, Phone, Globe, Clock } from "lucide-react";
import BusinessDetail from './BusinessDetail';
import { useState } from 'react';

interface BusinessListProps {
  businesses: Business[];
  loading: boolean;
  error: any;
  page: number;
  totalCount: number;
  perPage: number;
  onPageChange: (page: number) => void;
}

export function BusinessList({ 
  businesses, 
  loading, 
  error, 
  page, 
  totalCount, 
  perPage, 
  onPageChange 
}: BusinessListProps) {
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 text-red-500">
        Error loading businesses. Please try again later.
      </div>
    );
  }

  if (!businesses.length) {
    return (
      <div className="text-center p-8 text-gray-500">
        No businesses found matching your criteria.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((business) => (
          <Card 
            key={business.business_id} 
            className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedBusiness(business)}
          >
            <div className="relative h-48">
              <img
                src={business.photos_sample?.[0]?.photo_url_large || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&fit=crop'}
                alt={business.name}
                className="w-full h-full object-cover"
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

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{business.name}</h3>
              
              <div className="flex items-center mb-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm">
                  {business.rating} ({business.review_count} reviews)
                </span>
              </div>

              <div className="flex items-start space-x-1 text-gray-600 text-sm mb-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <p className="line-clamp-2">{business.full_address}</p>
              </div>

              {business.opening_status && (
                <div className="flex items-center text-sm">
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
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalCount > perPage && (
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {[...Array(Math.ceil(totalCount / perPage))].map((_, i) => (
              <button
                key={i}
                onClick={() => onPageChange(i + 1)}
                className={`px-4 py-2 rounded-lg ${
                  page === i + 1
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Business Detail Modal */}
      {selectedBusiness && (
        <BusinessDetail
          business={selectedBusiness}
          onClose={() => setSelectedBusiness(null)}
        />
      )}
    </div>
  );
}