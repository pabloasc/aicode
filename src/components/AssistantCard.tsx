import React from 'react';
import { Star } from '@phosphor-icons/react';
import { type Assistant } from '../types';

interface AssistantCardProps {
  assistant: Assistant;
}

export function AssistantCard({ assistant }: AssistantCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:transform hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-gray-100 rounded-lg text-gray-900">
          {assistant.icon}
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{assistant.name}</h2>
      </div>

      <p className="text-gray-600 mb-4">
        {assistant.description}
      </p>

      <ul className="space-y-2 mb-4">
        {assistant.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <Star size={16} className="mr-2 flex-shrink-0 text-gray-400" />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={assistant.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gray-900 hover:bg-gray-800 transition-colors px-4 py-2 rounded-lg text-white font-medium"
      >
        Learn More
      </a>
    </div>
  );
}