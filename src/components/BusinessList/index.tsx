import React from 'react';
import { Business } from '../../types/business';
import BusinessCard from '../BusinessCard';
import Pagination from '../Pagination';

interface BusinessListProps {
  businesses: Business[];
  loading: boolean;
  error: Error | null;
  page: number;
  totalCount: number;
  perPage: number;
  onPageChange: (page: number) => void;
}

const BusinessList: React.FC<BusinessListProps> = ({
  businesses,
  loading,
  error,
  page,
  totalCount,
  perPage,
  onPageChange
}) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        <p>Error loading businesses: {error.message}</p>
      </div>
    );
  }

  if (!businesses.length) {
    return (
      <div className="text-center text-gray-600 p-4">
        <p>No businesses found</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((business) => (
          <BusinessCard key={business.business_id} business={business} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalItems={totalCount}
        itemsPerPage={perPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default BusinessList;