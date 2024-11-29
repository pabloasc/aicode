import React from 'react';
  
export function SponsorBanner() {
  return (
    <div className="flex justify-center items-center mb-8">
      <a
        href="https://soarkite.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center space-x-3 px-4 py-2 border border-gray-200 rounded-full hover:border-gray-400 transition-colors"
      >
        <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
          Sponsored by
        </span>
        <img
          src="/soarkite_logo.png"
          alt="Sponsored by soarkite.com"
          className="h-5 group-hover:opacity-80 transition-opacity"
        />
      </a>
    </div>
  );
}