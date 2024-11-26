import React from 'react';
  
  export function SponsorBanner() {
    return (
      <div className="flex justify-center items-center mb-8">
        <a
          href="https://soarkite.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          Sponsored by 
          <img
            src="/soarkite_logo.png"
            alt="Sponsored by soarkite.com"
            className="h-8 filter"
          />
        </a>
      </div>
    );
  }