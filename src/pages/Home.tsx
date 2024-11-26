import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AssistantCard } from '../components/AssistantCard';
import { Tabs } from '../components/Tabs';
import { SponsorBanner } from '../components/SponsorBanner';
import { assistants } from '../data/assistants';

export function Home() {
  const [activeTab, setActiveTab] = useState<'all' | 'beginner' | 'expert'>('all');

  const filteredAssistants = assistants.filter(assistant => {
    if (activeTab === 'all') return true;
    return assistant.experienceLevel === activeTab;
  });

  useEffect(() => {
    const tabTitles = {
      all: 'All AI Coding Tools',
      beginner: 'Best AI Coding Tools for Beginners',
      expert: 'Advanced AI Coding Tools for Developers'
    };
    document.title = `${tabTitles[activeTab]} | aicode.fyi`;
  }, [activeTab]);

  return (
    <>
      <Helmet>
        <meta name="description" content={`Compare the best ${activeTab === 'all' ? '' : activeTab + ' '} AI coding tools and assistants. Features GitHub Copilot, Cursor, Bolt, v0, and more. Updated for 2024.`} />
      </Helmet>
      
      <main className="flex-grow">
        <div className="container py-16">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              aicode.fyi
            </h1>
            <SponsorBanner />
            <p className="text-xl text-gray-600 mb-8">
              Compare and choose the perfect AI-powered coding companion for your development needs
            </p>
            <Tabs activeTab={activeTab} onChange={setActiveTab} />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAssistants.map((assistant) => (
              <AssistantCard
                key={assistant.id}
                assistant={assistant}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}