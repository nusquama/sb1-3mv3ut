import React, { useState } from 'react';
import {
  Utensils,
  Hotel,
  Mountain,
  Music,
  Laptop,
  Heart,
  Landmark,
  Star,
  MapPin,
} from 'lucide-react';

const categories = [
  {
    id: 1,
    title: 'Dining & Restaurants',
    icon: Utensils,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 2453,
  },
  {
    id: 2,
    title: 'Hotels & Resorts',
    icon: Hotel,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: 1876,
  },
  {
    id: 3,
    title: 'Activities & Adventures',
    icon: Mountain,
    image: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: 3241,
  },
  {
    id: 4,
    title: 'Nightlife',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviews: 1543,
  },
  {
    id: 5,
    title: 'Coworking & Digital Nomad',
    icon: Laptop,
    image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 987,
  },
  {
    id: 6,
    title: 'Wellness & Sports',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: 2156,
  },
  {
    id: 7,
    title: 'Cultural Experiences',
    icon: Landmark,
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: 3421,
  },
];

const areas = ['All Areas', 'Canggu', 'Ubud', 'Seminyak', 'Uluwatu', 'Nusa Dua'];

export default function CategoryGrid() {
  const [selectedArea, setSelectedArea] = useState('All Areas');

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
          Explore Categories
        </h2>
        <div className="flex flex-wrap gap-2">
          {areas.map((area) => (
            <button
              key={area}
              onClick={() => setSelectedArea(area)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedArea === area
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {area}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={category.image}
                alt={category.title}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 p-6 w-full">
              <div className="flex items-center space-x-2 mb-2">
                <category.icon className="h-5 w-5 text-teal-400" />
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="ml-1 text-white">{category.rating}</span>
                </div>
                <span className="text-white/80">({category.reviews} reviews)</span>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-teal-400" />
                  <span className="ml-1 text-white/80">12 venues</span>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <button className="bg-white/90 dark:bg-gray-900/90 p-2 rounded-full hover:bg-white dark:hover:bg-gray-900 transition-colors">
                <Heart className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}