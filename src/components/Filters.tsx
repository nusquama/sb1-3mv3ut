import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface FiltersProps {
  onFilterChange: (filters: {
    search: string;
    category: string;
    location: string;
    sortBy: string;
  }) => void;
}

export function Filters({ onFilterChange }: FiltersProps) {
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    location: '',
    sortBy: 'rating'
  });

  const handleChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'restaurant', label: 'Restaurants' },
    { value: 'bar', label: 'Bars & Nightlife' },
    { value: 'cafe', label: 'Cafes' },
    { value: 'spa', label: 'Spa & Wellness' },
    { value: 'activity', label: 'Activities' }
  ];

  const locations = [
    { value: '', label: 'All Locations' },
    { value: 'seminyak', label: 'Seminyak' },
    { value: 'canggu', label: 'Canggu' },
    { value: 'ubud', label: 'Ubud' },
    { value: 'kuta', label: 'Kuta' },
    { value: 'jimbaran', label: 'Jimbaran' }
  ];

  const sortOptions = [
    { value: 'rating', label: 'Highest Rated' },
    { value: 'reviews', label: 'Most Reviewed' },
    { value: 'name', label: 'Alphabetical' }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search businesses..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            value={filters.search}
            onChange={(e) => handleChange('search', e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
          value={filters.category}
          onChange={(e) => handleChange('category', e.target.value)}
        >
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>

        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
          value={filters.location}
          onChange={(e) => handleChange('location', e.target.value)}
        >
          {locations.map((location) => (
            <option key={location.value} value={location.value}>
              {location.label}
            </option>
          ))}
        </select>

        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
          value={filters.sortBy}
          onChange={(e) => handleChange('sortBy', e.target.value)}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}