import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import Hero from './components/Hero';
import { BusinessList } from './components/BusinessList';
import { Filters } from './components/Filters';
import { useBusinesses } from './hooks/useBusinesses';
import CategoryGrid from './components/CategoryGrid';
import Footer from './components/Footer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <Header isDark={false} toggleTheme={() => {}} />
        <Hero />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BusinessListSection />
          <CategoryGrid />
        </main>

        <Footer />
      </div>
    </QueryClientProvider>
  );
}

function BusinessListSection() {
  const {
    businesses,
    loading,
    error,
    page,
    totalCount,
    setPage,
    updateFilters
  } = useBusinesses();

  return (
    <div>
      <Filters onFilterChange={updateFilters} />
      <BusinessList 
        businesses={businesses}
        loading={loading}
        error={error}
        page={page}
        totalCount={totalCount}
        perPage={20}
        onPageChange={setPage}
      />
    </div>
  );
}