import React from 'react';
import { GithubLogo, Lightning, Cloud, Terminal, Sparkle, CirclesFour, Wind, Code, BracketsCurly } from '@phosphor-icons/react';
import { type Assistant } from '../types';

export const assistants: Assistant[] = [
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    icon: <GithubLogo size={32} weight="fill" />,
    description: 'The pioneer in AI pair programming, offering real-time suggestions and whole-line completions powered by OpenAI Codex.',
    features: [
      'Real-time code suggestions',
      'Multi-language support',
      'VS Code & JetBrains integration',
      'GitHub integration',
      '$10/month or $100/year'
    ],
    link: 'https://github.com/features/copilot',
    experienceLevel: 'expert'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    icon: <CirclesFour size={32} weight="fill" />,
    description: 'Free VS Code-based editor with GPT-4 integration, offering powerful code editing and generation capabilities.',
    features: [
      'Built on VS Code',
      'GPT-4 integration',
      'Chat interface',
      'Code explanation',
      'Free to use'
    ],
    link: 'https://cursor.sh',
    experienceLevel: 'expert'
  },
  {
    id: 'bolt',
    name: 'Bolt',
    icon: <Lightning size={32} weight="fill" />,
    description: 'Browser-based development environment optimized for React, perfect for rapid prototyping and instant project setup.',
    features: [
      'Browser-based IDE',
      'Real-time collaboration',
      'React-optimized',
      'Instant deployment',
      'Free during beta'
    ],
    link: 'https://bolt.new',
    experienceLevel: 'beginner'
  },
  {
    id: 'v0',
    name: 'v0',
    icon: <Code size={32} weight="fill" />,
    description: 'AI-powered full-stack development platform with strong UI capabilities and seamless Vercel deployment.',
    features: [
      'UI-focused development',
      'Full-stack support',
      'shadcn/ui integration',
      'Vercel deployment',
      'Free during beta'
    ],
    link: 'https://v0.dev',
    experienceLevel: 'beginner'
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    icon: <Sparkle size={32} weight="fill" />,
    description: 'AI code completion tool with both cloud and local processing options, focusing on privacy and personalization.',
    features: [
      'Local AI processing option',
      'Multi-IDE support',
      'Team collaboration',
      'Custom model training',
      'From $12/month'
    ],
    link: 'https://www.tabnine.com',
    experienceLevel: 'expert'
  },
  {
    id: 'amazon-codewhisperer',
    name: 'Amazon CodeWhisperer',
    icon: <Terminal size={32} weight="fill" />,
    description: 'AWS-integrated coding companion with strong security features and free individual tier.',
    features: [
      'AWS integration',
      'Security scanning',
      'Reference tracking',
      'Multi-IDE support',
      'Free for individuals'
    ],
    link: 'https://aws.amazon.com/codewhisperer',
    experienceLevel: 'expert'
  },
  {
    id: 'replit',
    name: 'Replit',
    icon: <BracketsCurly size={32} weight="fill" />,
    description: 'Collaborative browser-based IDE with built-in AI features and hosting capabilities.',
    features: [
      'Browser-based development',
      'AI code completion',
      'Built-in hosting',
      'Real-time collaboration',
      'Free tier available'
    ],
    link: 'https://replit.com',
    experienceLevel: 'beginner'
  },
  {
    id: 'claude',
    name: 'Claude',
    icon: <Cloud size={32} weight="fill" />,
    description: 'Versatile AI assistant with strong coding capabilities and technical understanding.',
    features: [
      'Advanced reasoning',
      'Code generation',
      'Technical writing',
      'Security analysis',
      'Free tier available'
    ],
    link: 'https://anthropic.com/claude',
    experienceLevel: 'expert'
  }
];