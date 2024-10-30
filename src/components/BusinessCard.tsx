import React from 'react';
import { Star, MapPin } from 'lucide-react';
import type { Business } from '../types/business';

interface BusinessCardProps {
  business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={business.imageUrl}
          alt={business.name}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 p-6 w-full">
        <h3 className="text-xl font-bold text-white mb-2">{business.name}</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="ml-1 text-white">{business.rating}</span>
          </div>
          <span className="text-white/80">({business.reviewCount} reviews)</span>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-teal-400" />
            <span className="ml-1 text-white/80">{business.location}</span>
          </div>
        </div>
        <div className="mt-2">
          <span className="text-sm text-white/90">{business.category}</span>
          <span className="mx-2 text-white/60">•</span>
          <span className="text-sm text-white/90">{business.priceLevel}</span>
        </div>
      </div>
    </div>
  );
}