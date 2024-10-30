import React from 'react';
import { SortOption, sortOptions } from '../hooks/useBusinesses';

interface FilterBarProps {
  sortBy: SortOption['value'];
  onSortChange: (value: SortOption['value']) => void;
  selectedCategory: string;
  categories: Array<{ id: string; name: string; count: number }>;
  onCategoryChange: (category: string) => void;
  selectedLocation: string;
  locations: Array<{ id: string; name: string }>;
  onLocationChange: (location: string) => void;
}

export default function FilterBar({
  sortBy,
  onSortChange,
  selectedCategory,
  categories,
  onCategoryChange,
  selectedLocation,
  locations,
  onLocationChange
}: FilterBarProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 mb-6">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium mb-2">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption['value'])}
            className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name} ({category.count})
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium mb-2">Location</label>
          <select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}