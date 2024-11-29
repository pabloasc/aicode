import React from 'react';
import { Star } from '@phosphor-icons/react';
import { type Assistant } from '../types';

interface AssistantCardProps {
  assistant: Assistant;
}

export function AssistantCard({ assistant }: AssistantCardProps) {
  return (
    <article className="bg-white p-6 h-full flex flex-col">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 bg-gray-50">
          {assistant.icon}
        </div>
        <h2 className="text-xl font-medium">{assistant.name}</h2>
      </div>

      <p className="mb-6 text-base leading-relaxed flex-grow">
        {assistant.description}
      </p>

      <div className="mb-6">
        <h3 className="text-xs uppercase tracking-wider mb-3 text-gray-500">Notable Features</h3>
        <ul className="space-y-2">
          {assistant.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Star size={12} className="mr-2 flex-shrink-0 mt-1.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={assistant.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border-b border-black hover:text-accent transition-colors text-sm"
      >
        Read More
      </a>
    </article>
  );
}