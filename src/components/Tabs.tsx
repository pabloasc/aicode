import React from 'react';

interface TabsProps {
  activeTab: 'all' | 'beginner' | 'expert';
  onChange: (tab: 'all' | 'beginner' | 'expert') => void;
}

export function Tabs({ activeTab, onChange }: TabsProps) {
  const tabs = [
    { id: 'all', label: 'All Assistants' },
    { id: 'beginner', label: 'No Coding Experience' },
    { id: 'expert', label: 'Expert Coders' },
  ] as const;

  return (
    <div className="flex justify-center space-x-2 mb-8">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`
            px-6 py-3 rounded-lg font-medium transition-all duration-200
            ${activeTab === id
              ? 'bg-gray-900 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100'
            }
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
}