import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from '@phosphor-icons/react';
import { type Assistant } from '../types';

interface AssistantCardProps {
  assistant: Assistant;
}

export function AssistantCard({ assistant }: AssistantCardProps) {
  return (
    <article className="bg-white p-6 h-full flex flex-col rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/assistant/${assistant.id}`} className="flex-grow">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-gray-50 rounded-lg">
            {assistant.icon}
          </div>
          <h2 className="text-xl font-medium hover:text-accent transition-colors">
            {assistant.name}
          </h2>
        </div>

        <p className="mb-6 text-base leading-relaxed text-gray-600">
          {assistant.description}
        </p>

        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-wider mb-3 text-gray-500">Notable Features</h3>
          <ul className="space-y-2">
            {assistant.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <Star size={12} className="mr-2 flex-shrink-0 mt-1.5" />
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </Link>

      <div className="flex justify-between items-center mt-auto">
        <Link
          to={`/assistant/${assistant.id}`}
          className="text-sm text-accent hover:underline"
        >
          Learn more
        </Link>
        <a
          href={assistant.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-accent hover:border-accent transition-all duration-200"
        >
          Visit Website
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </article>
  );
}