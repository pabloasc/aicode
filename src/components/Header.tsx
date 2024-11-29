import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="text-center py-8">
      <Link to="/" className="inline-block">
        <h1 className="text-5xl md:text-6xl mb-4 hover:text-accent transition-colors">
          aicode.fyi
        </h1>
      </Link>
    </header>
  );
}
