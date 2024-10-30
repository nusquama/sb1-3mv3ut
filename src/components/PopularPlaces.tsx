import React from 'react';
import { Star, MapPin } from 'lucide-react';

const popularPlaces = [
  {
    name: "Merah Putih",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    category: "Fine Dining, Indonesian",
    location: "Seminyak",
    rating: 4.8,
    reviews: 2453,
    price: "$$$"
  },
  {
    name: "Potato Head Beach Club",
    image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80",
    category: "Beach Club, International",
    location: "Canggu",
    rating: 4.6,
    reviews: 3241,
    price: "$$"
  },
  {
    name: "Locavore",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    category: "Fine Dining, Contemporary",
    location: "Ubud",
    rating: 4.9,
    reviews: 1876,
    price: "$$$$"
  },
  {
    name: "La Favela",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    category: "Nightlife, Restaurant",
    location: "Seminyak",
    rating: 4.7,
    reviews: 2987,
    price: "$$$"
  }
];

export default function PopularPlaces() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Popular Places in Bali</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {popularPlaces.map((place) => (
          <div key={place.name} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">{place.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{place.category}</p>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                <MapPin className="h-4 w-4 mr-1" />
                {place.location}
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="ml-1 text-sm">
                    {place.rating} ({place.reviews})
                  </span>
                </div>
                <span className="text-sm font-medium">{place.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}