import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24 grid md:grid-cols-2 gap-8 items-center">
      <div className="animate-fade-in">
        <p className="text-teal-500 mb-2 font-medium">DISCOVER, DINE & UNWIND</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Experience the Magic
          <br />
          of Bali
        </h1>
        <div className="flex gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <input
            type="text"
            placeholder="Location"
            className="flex-1 px-4 py-2 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 px-4 py-2 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-lg transition-colors">
            <Search className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="relative h-[400px] rounded-lg overflow-hidden animate-slide-up">
        <img
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2070&q=80"
          alt="Bali scenery"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    </section>
  );
}