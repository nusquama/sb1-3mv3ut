import axios from 'axios';
import { Business } from '../types/business';

const CACHE_KEY = 'bali_businesses_cache';
const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

const api = axios.create({
  baseURL: 'https://local-business-data.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': 'e83838d074msh38659a9d9bcdf13p14f294jsn651009baa7a7',
    'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
  }
});

interface CacheData {
  timestamp: number;
  data: Business[];
}

const getFromCache = (): Business[] | null => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const { timestamp, data }: CacheData = JSON.parse(cached);
    if (Date.now() - timestamp > CACHE_EXPIRY) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Cache error:', error);
    return null;
  }
};

const setCache = (data: Business[]) => {
  try {
    const cacheData: CacheData = {
      timestamp: Date.now(),
      data
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  } catch (error) {
    console.error('Error setting cache:', error);
  }
};

export const searchBusinesses = async (params: {
  query?: string;
  category?: string;
  location?: string;
  sortBy?: string;
  page?: number;
  limit?: number;
}) => {
  const { page = 1, limit = 20 } = params;
  const offset = (page - 1) * limit;

  // Try to get data from cache first
  const cachedData = getFromCache();
  if (cachedData) {
    console.log('Using cached data');
    return filterAndPaginateData(cachedData, params);
  }

  try {
    const response = await api.get('/search', {
      params: {
        query: 'restaurant bali,indonesia',
        limit: 300, // Get maximum allowed to cache
        lat: -8.4095178,
        lng: 115.188916,
        zoom: 12,
        language: 'en',
        region: 'id'
      }
    });

    const businesses = response.data.data;
    setCache(businesses);
    
    return filterAndPaginateData(businesses, params);
  } catch (error) {
    console.error('Error fetching businesses:', error);
    // Fallback to mock data if API fails
    return filterAndPaginateData(mockBusinesses, params);
  }
};

const filterAndPaginateData = (
  data: Business[],
  params: {
    query?: string;
    category?: string;
    location?: string;
    sortBy?: string;
    page?: number;
    limit?: number;
  }
) => {
  const { query, category, location, sortBy, page = 1, limit = 20 } = params;
  let filtered = [...data];

  // Apply filters
  if (query) {
    const searchTerms = query.toLowerCase().split(' ');
    filtered = filtered.filter(business => {
      const searchString = `${business.name} ${business.type} ${business.full_address}`.toLowerCase();
      return searchTerms.every(term => searchString.includes(term));
    });
  }

  if (category) {
    filtered = filtered.filter(business => 
      business.type.toLowerCase().includes(category.toLowerCase()) ||
      business.subtypes.some(subtype => 
        subtype.toLowerCase().includes(category.toLowerCase())
      )
    );
  }

  if (location) {
    filtered = filtered.filter(business =>
      business.full_address.toLowerCase().includes(location.toLowerCase())
    );
  }

  // Apply sorting
  if (sortBy) {
    filtered.sort((a, b) => {
      switch (sortBy) {
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
  }

  // Calculate pagination
  const offset = (page - 1) * limit;
  const paginatedData = filtered.slice(offset, offset + limit);

  return {
    data: paginatedData,
    total_results: filtered.length,
    page,
    limit
  };
};

export const fetchBusinessReviews = async (businessId: string, limit: number = 5) => {
  try {
    const response = await api.get('/business-reviews', {
      params: {
        business_id: businessId,
        limit,
        sort_by: 'most_relevant'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return { data: [] };
  }
};