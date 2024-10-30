import { useState, useEffect, useCallback, useMemo } from 'react';
import { searchBusinesses } from '../services/api';
import type { Business } from '../types/business';

interface UseBusinessesProps {
  initialFilters?: {
    search?: string;
    category?: string;
    location?: string;
    sortBy?: string;
  };
}

export function useBusinesses({ initialFilters = {} }: UseBusinessesProps = {}) {
  const [filters, setFilters] = useState(initialFilters);
  const [page, setPage] = useState(1);
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  
  const limit = 20;

  const fetchBusinesses = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await searchBusinesses({
        query: `${filters.category || ''} ${filters.search || ''} ${filters.location || ''}`.trim(),
        limit,
        offset: (page - 1) * limit
      });

      setBusinesses(response.data);
      setTotalCount(response.total_results);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch businesses'));
    } finally {
      setLoading(false);
    }
  }, [filters, page]);

  useEffect(() => {
    fetchBusinesses();
  }, [fetchBusinesses]);

  const sortedBusinesses = useMemo(() => {
    if (!filters.sortBy) return businesses;

    return [...businesses].sort((a, b) => {
      switch (filters.sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.review_count - a.review_count;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }, [businesses, filters.sortBy]);

  const updateFilters = useCallback((newFilters: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setPage(1);
  }, []);

  return {
    businesses: sortedBusinesses,
    loading,
    error,
    page,
    totalCount,
    setPage,
    filters,
    updateFilters,
    refresh: fetchBusinesses
  };
}