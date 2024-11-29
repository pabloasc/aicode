import React from 'react';

interface TabsProps {
  activeTab: 'all' | 'beginner' | 'expert';
  onChange: (tab: 'all' | 'beginner' | 'expert') => void;
}

export function Tabs({ activeTab, onChange }: TabsProps) {
  const tabs = [
    { id: 'all', label: 'All Assistants' },
    { id: 'beginner', label: 'Browser-based' },
    { id: 'expert', label: 'IDE-based' },
  ] as const;

  return (
    <div className="flex justify-center space-x-8 mb-12">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`
            px-4 py-3 font-medium transition-all duration-200 relative
            ${activeTab === id
              ? 'text-black after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-gray-200'
              : 'text-gray-500 hover:text-black'
            }
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
}