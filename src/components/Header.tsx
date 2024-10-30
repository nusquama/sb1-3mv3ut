import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
          BaliLife
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-teal-500">Browse</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-teal-500">Listings</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-teal-500">Login</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-teal-500">Sign Up</a>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition-colors">
            Add Place
          </button>
        </nav>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-600 dark:text-gray-300"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-teal-500">Browse</a>
            <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-teal-500">Listings</a>
            <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-teal-500">Login</a>
            <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-teal-500">Sign Up</a>
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition-colors">
              Add Place
            </button>
          </div>
        </div>
      )}
    </header>
  );
}