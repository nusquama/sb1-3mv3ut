import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export function Input({ className = '', error, ...props }: InputProps) {
  return (
    <div className="relative">
      <input
        className={`
          w-full rounded-lg border border-gray-300 bg-white px-4 py-2
          text-gray-900 placeholder-gray-500 transition-colors
          focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500
          disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}