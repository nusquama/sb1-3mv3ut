import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Company: ['About', 'Careers', 'Press', 'Blog'],
    Support: ['Help Center', 'Safety', 'Cancellation', 'COVID-19'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Settings'],
    'Partner with Us': ['List Your Business', 'Advertise', 'Affiliate Program'],
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                {category}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-teal-500 dark:hover:text-teal-400"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} BaliLife. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}