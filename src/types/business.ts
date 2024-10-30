export interface Business {
  business_id: string;
  name: string;
  rating: number;
  review_count: number;
  price_level?: string;
  type: string;
  subtypes: string[];
  address: string;
  full_address: string;
  phone_number?: string;
  website?: string;
  latitude: number;
  longitude: number;
  photos_sample?: {
    photo_url: string;
    photo_url_large: string;
  }[];
  opening_status?: string;
  working_hours?: {
    [key: string]: string[];
  };
  about?: {
    summary?: string;
    details?: {
      [key: string]: any;
    };
  };
}