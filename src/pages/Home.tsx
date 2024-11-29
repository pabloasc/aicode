import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AssistantCard } from '../components/AssistantCard';
import { Tabs } from '../components/Tabs';
import { SponsorBanner } from '../components/SponsorBanner';
import { Header } from '../components/Header';
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
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <Header />
        <div className="mb-12">
          <SponsorBanner />
          <p className="text-xl mb-12 max-w-3xl mx-auto text-center">
            Compare and choose the perfect AI-powered coding companion
          </p>
          <Tabs activeTab={activeTab} onChange={setActiveTab} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAssistants.map((assistant) => (
            <AssistantCard
              key={assistant.id}
              assistant={assistant}
            />
          ))}
        </div>
      </main>
    </>
  );
}