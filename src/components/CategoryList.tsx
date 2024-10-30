import React from 'react';
import {
  Utensils,
  Hotel,
  Mountain,
  Music,
  Laptop,
  Heart,
  Landmark,
  ShoppingBag,
  Camera,
  PalmtreeIcon,
  Bus,
  ChefHat,
  Dog,
  Calendar,
  Store,
  Flower,
  Building,
  Ship,
  Tent,
  Microscope,
  Palette
} from 'lucide-react';

// Map of category types to icons
const categoryIcons: Record<string, any> = {
  'Restaurant': Utensils,
  'Hotel': Hotel,
  'Adventure': Mountain,
  'Music Venue': Music,
  'Coworking Space': Laptop,
  'Wellness': Heart,
  'Temple': Landmark,
  'Shopping': ShoppingBag,
  'Photography': Camera,
  'Beach': PalmtreeIcon,
  'Tour': Bus,
  'Cooking Class': ChefHat,
  'Pet Services': Dog,
  'Event Venue': Calendar,
  'Store': Store,
  'Spa & Wellness': Flower,
  'Historical Site': Building,
  'Water Sports': Ship,
  'Camping': Tent,
  'Museum': Microscope,
  'Art Gallery': Palette
};

// Default images for categories that don't have specific images
const defaultImages: Record<string, string> = {
  'Restaurant': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
  'Hotel': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
  'Beach': 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62',
  'Temple': 'https://images.unsplash.com/photo-1604869515882-4d10fa4b0492',
  'Spa & Wellness': 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874',
  'Default': 'https://images.unsplash.com/photo-1537996194471-e657df975ab4'
};

interface CategoryListProps {
  categories: Array<{
    id: string;
    name: string;
    count: number;
  }>;
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

export default function CategoryList({ categories, selectedCategory, onCategorySelect }: CategoryListProps) {
  if (!categories.length) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((category) => {
        const IconComponent = categoryIcons[category.name] || Landmark;
        const imageUrl = defaultImages[category.name] || defaultImages.Default;

        return (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`relative group overflow-hidden rounded-xl aspect-video ${
              selectedCategory === category.id
                ? 'ring-2 ring-teal-500'
                : 'hover:ring-2 hover:ring-teal-500/50'
            }`}
          >
            <img
              src={`${imageUrl}?auto=format&fit=crop&w=800&q=80`}
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <IconComponent className="w-6 h-6 text-teal-400 mb-2" />
              <h3 className="text-white font-semibold text-lg">{category.name}</h3>
              <p className="text-white/80 text-sm">{category.count} places</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}