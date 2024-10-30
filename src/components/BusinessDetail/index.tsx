import React, { useState, useEffect } from 'react';
import { Star, MapPin, Clock, Phone, Globe, DollarSign, ExternalLink, X } from 'lucide-react';
import { fetchBusinessReviews } from '../../services/api';
import { Business } from '../../types/business';

interface BusinessDetailProps {
  business: Business;
  onClose: () => void;
}

export default function BusinessDetail({ business, onClose }: BusinessDetailProps) {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(true);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const response = await fetchBusinessReviews(business.business_id, 5);
        setReviews(response.data || []);
      } catch (error) {
        console.error('Error loading reviews:', error);
      } finally {
        setLoadingReviews(false);
      }
    };

    loadReviews();
  }, [business.business_id]);

  // Close modal when clicking escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative h-64">
          <img
            src={business.photos_sample?.[0]?.photo_url_large}
            alt={business.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-2xl font-bold mb-2">{business.name}</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="ml-1">
                  {business.rating} ({business.review_count} reviews)
                </span>
              </div>
              {business.price_level && (
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5" />
                  <span>{business.price_level}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Details</h3>
              <div className="space-y-4">
                <div className="flex items-start text-gray-600 dark:text-gray-300">
                  <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <span>{business.full_address}</span>
                </div>

                {business.opening_status && (
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>{business.opening_status}</span>
                  </div>
                )}

                {business.phone_number && (
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                    <a href={`tel:${business.phone_number}`} className="hover:text-teal-500">
                      {business.phone_number}
                    </a>
                  </div>
                )}

                {business.website && (
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Globe className="h-5 w-5 mr-2 flex-shrink-0" />
                    <a
                      href={business.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-teal-500"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {business.subtypes.map((type, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Recent Reviews</h3>
                {business.reviews_link && (
                  <a
                    href={business.reviews_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:text-teal-600 flex items-center text-sm"
                  >
                    View all reviews
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                )}
              </div>

              {loadingReviews ? (
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                    </div>
                  ))}
                </div>
              ) : reviews.length > 0 ? (
                <div className="space-y-4">
                  {reviews.map((review: any) => (
                    <div key={review.review_id} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                      <div className="flex items-center mb-2">
                        <img
                          src={review.author_photo_url}
                          alt={review.author_name}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <div>
                          <div className="font-medium">{review.author_name}</div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400" />
                            <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                              {review.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                        {review.review_text}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 dark:text-gray-400">No reviews available</p>
              )}
            </div>
          </div>

          {business.photos_sample && business.photos_sample.length > 1 && (
            <div className="mt-6">
              <h3 className="font-semibold mb-4">Photos</h3>
              <div className="grid grid-cols-3 gap-4">
                {business.photos_sample.slice(1).map((photo, index) => (
                  <img
                    key={index}
                    src={photo.photo_url_large}
                    alt={`${business.name} photo ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex space-x-4">
            {business.booking_link && (
              <a
                href={business.booking_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-teal-500 text-white text-center py-3 rounded-lg hover:bg-teal-600 transition-colors"
              >
                Make a Reservation
              </a>
            )}
            {business.place_link && (
              <a
                href={business.place_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white text-center py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                View on Google Maps
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}