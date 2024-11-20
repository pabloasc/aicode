import React, { useState } from 'react';
import { AssistantCard } from './components/AssistantCard';
import { Tabs } from './components/Tabs';
import { assistants } from './data/assistants';

function App() {
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [activeTab, setActiveTab] = useState<'all' | 'beginner' | 'expert'>('all');

  const handleVote = (id: string) => {
    setVotes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const filteredAssistants = assistants.filter(assistant => {
    if (activeTab === 'all') return true;
    return assistant.experienceLevel === activeTab;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            AI Coding Assistants
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover the best AI-powered coding companions
          </p>
          <Tabs activeTab={activeTab} onChange={setActiveTab} />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAssistants.map((assistant) => (
            <AssistantCard
              key={assistant.id}
              assistant={assistant}
              votes={votes}
              onVote={handleVote}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;