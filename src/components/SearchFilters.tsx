import React from 'react';
import { Search } from 'lucide-react';

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onFilterChange: (filter: string) => void;
  selectedFilter: string;
}

const filters = [
  'All',
  'Restaurants',
  'Cafes',
  'Beach Clubs',
  'Fine Dining',
  'Local Cuisine'
];

export default function SearchFilters({ onSearch, onFilterChange, selectedFilter }: SearchFiltersProps) {
  return (
    <div className="mb-8">
      <div className="relative max-w-2xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search restaurants, cafes, and more..."
          className="w-full pl-12 pr-4 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
      </div>
      
      <div className="flex flex-wrap gap-2 justify-center">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedFilter === filter
                ? 'bg-teal-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}