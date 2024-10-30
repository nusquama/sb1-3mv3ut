import React from 'react';
import type { Category } from '../types/business';

interface CategorySectionProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategorySection({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: CategorySectionProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
          Explore Categories
        </h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => onCategoryChange(category.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.slug
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
              <span className="ml-1 text-xs opacity-70">({category.count})</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => onCategoryChange(category.slug)}
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 p-6 w-full">
              <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
              <p className="text-white/80 text-sm line-clamp-2">{category.description}</p>
              <div className="mt-2 text-teal-400 text-sm">
                {category.count} places
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}