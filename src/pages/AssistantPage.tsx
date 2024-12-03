import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, ArrowLeft } from '@phosphor-icons/react';
import { Header } from '../components/Header';
import { assistants } from '../data/assistants';

export function AssistantPage() {
  const { id } = useParams();
  const assistant = assistants.find(a => a.id === id);

  if (!assistant) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <Header />
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-4">Assistant not found</h2>
          <Link 
            to="/"
            className="inline-flex items-center text-accent hover:underline"
          >
            <ArrowLeft className="mr-2" />
            Back to all assistants
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{assistant.name} - AI Coding Assistant | aicode.fyi</title>
        <meta 
          name="description" 
          content={`${assistant.description} Learn about ${assistant.name}'s features, pricing, and capabilities. Compare with other AI coding tools.`}
        />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <Header />
        
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/"
            className="inline-flex items-center text-accent hover:underline mb-8"
          >
            <ArrowLeft className="mr-2" />
            Back to all assistants
          </Link>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-4 bg-gray-50 rounded-lg">
                {assistant.icon}
              </div>
              <h1 className="text-3xl font-medium">{assistant.name}</h1>
            </div>

            <p className="text-lg mb-8 leading-relaxed">
              {assistant.description}
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-medium mb-4">Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {assistant.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Star size={16} className="mr-2 flex-shrink-0 mt-1" />
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end">
              <a
                href={assistant.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-accent hover:border-accent transition-all duration-200"
              >
                Visit Website
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
