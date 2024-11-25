import React from 'react';
import { GithubLogo, Lightning, Cloud, Terminal, Sparkle, CirclesFour } from '@phosphor-icons/react';
import { type Assistant } from '../types';

export const assistants: Assistant[] = [
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    icon: <GithubLogo size={32} weight="fill" />,
    description: 'AI pair programmer that helps you write code faster with smart completions and suggestions.',
    features: [
      'Real-time code suggestions',
      'Multi-language support',
      'IDE integration',
      'Context-aware completions',
      'Natural language to code'
    ],
    link: 'https://github.com/features/copilot',
    experienceLevel: 'expert'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    icon: <CirclesFour size={32} weight="fill" />,
    description: 'AI-first code editor that helps you write, edit, and understand code faster.',
    features: [
      'Built-in AI chat',
      'Code explanation',
      'Automatic refactoring',
      'Smart code navigation',
      'Custom IDE features'
    ],
    link: 'https://cursor.sh',
    experienceLevel: 'beginner'
  },
  {
    id: 'bolt',
    name: 'Bolt',
    icon: <Lightning size={32} weight="fill" />,
    description: 'Interactive AI coding environment with real-time collaboration and instant previews.',
    features: [
      'Live preview environment',
      'Real-time collaboration',
      'Smart code generation',
      'Project templates',
      'Instant deployment'
    ],
    link: 'https://bolt.new',
    experienceLevel: 'beginner'
  },
  {
    id: 'claude',
    name: 'Claude',
    icon: <Cloud size={32} weight="fill" />,
    description: 'Anthropic\'s AI assistant capable of complex coding tasks and technical discussions.',
    features: [
      'Advanced reasoning',
      'Code review capabilities',
      'Technical writing',
      'Security analysis',
      'Documentation generation'
    ],
    link: 'https://anthropic.com/claude',
    experienceLevel: 'expert'
  },
  {
    id: 'amazon-codewhisperer',
    name: 'Amazon CodeWhisperer',
    icon: <Terminal size={32} weight="fill" />,
    description: 'AI coding companion that provides real-time suggestions based on AWS best practices.',
    features: [
      'AWS integration',
      'Security scanning',
      'Automated code reviews',
      'Reference tracking',
      'Multi-runtime support'
    ],
    link: 'https://aws.amazon.com/codewhisperer',
    experienceLevel: 'expert'
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    icon: <Sparkle size={32} weight="fill" />,
    description: 'AI code completion tool that learns your coding patterns and preferences.',
    features: [
      'Personalized suggestions',
      'Local processing option',
      'Team learning',
      'Privacy focused',
      'Multiple IDE support'
    ],
    link: 'https://www.tabnine.com',
    experienceLevel: 'expert'
  }
];