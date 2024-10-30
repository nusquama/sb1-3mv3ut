import { Business } from '../types/business';

// Import the mock data from the previous response
export const mockBusinesses: Business[] = [
  {
    business_id: "1",
    name: "Kaum Bali",
    rating: 4.7,
    review_count: 840,
    price_level: "$$$",
    type: "Indonesian restaurant",
    subtypes: ["Indonesian restaurant", "Cocktail bar", "Restaurant"],
    address: "Jl. Petitenget No.51B",
    full_address: "Kaum Bali, Jl. Petitenget No.51B, Kerobokan Kelod, Kuta Utara, Badung Regency, Bali 80361, Indonesia",
    phone_number: "+623616207979",
    website: "https://seminyak.potatohead.co/feast/kaum",
    latitude: -8.6792024,
    longitude: 115.1499884,
    photos_sample: [{
      photo_url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      photo_url_large: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200"
    }],
    opening_status: "Open",
    working_hours: {
      Monday: ["12:00 PM - 10:00 PM"],
      Tuesday: ["12:00 PM - 10:00 PM"],
      Wednesday: ["12:00 PM - 10:00 PM"],
      Thursday: ["12:00 PM - 10:00 PM"],
      Friday: ["12:00 PM - 10:00 PM"],
      Saturday: ["12:00 PM - 10:00 PM"],
      Sunday: ["12:00 PM - 10:00 PM"]
    }
  },
  // Add more mock data as needed
];