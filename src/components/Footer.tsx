import React from 'react';
import { Link } from 'react-router-dom';
import { GithubLogo, TwitterLogo, LinkedinLogo } from '@phosphor-icons/react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">aicode.fyi</h3>
            <p className="text-gray-400">
              Discover and compare the best AI-powered coding tools to enhance your development workflow.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/submit" className="hover:text-white transition-colors">Submit Assistant</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/pabloasc/aicode" className="hover:text-white transition-colors">
                <GithubLogo size={24} weight="fill" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} aicode.fyi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}