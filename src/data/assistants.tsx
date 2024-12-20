import { GithubLogo, Heart, Terminal } from '@phosphor-icons/react';
import { type Assistant } from '../types';

export const assistants: Assistant[] = [
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    icon: <GithubLogo size={32} weight="fill" />,
    description: 'AI pair programmer that helps you write code faster with smart suggestions and real-time completions across multiple IDEs.',
    features: [
      'Code completions in any language',
      'Chat and CLI capabilities',
      'VS Code, JetBrains, Neovim support',
      'Security vulnerability filtering',
      'Free Plan, $10/month or $100/year (Individual)'
    ],
    link: 'https://github.com/features/copilot',
    experienceLevel: 'expert'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    icon: <img width={32} src="/logo-cursor-ai.webp" />,
    description: 'Free VS Code-based editor with GPT-4 and Claude-3.5 Sonnet integrations, offering powerful code editing and generation capabilities.',
    features: [
      'Built on VS Code',
      'GPT-4 and Claude-3.5 Sonnet integrations (PRO Models)',
      'Chat interface',
      'Code explanation',
      'Free to use (Limited for PRO models)'
    ],
    link: 'https://cursor.sh',
    experienceLevel: 'expert'
  },
  {
    id: 'bolt',
    name: 'Bolt',
    icon: <img width={32} src="/bolt.png" />,
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
    icon: <img width={32} src="/v0.png" />,
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
    icon: <img width={32} src="/tabnine.png" />,
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
    icon: <img width={32} src="/replit_logo.jpg" />,
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
    id: 'windsurf',
    name: 'Windsurf AI',
    icon: <img width={32} src="https://codeium.com/logo/windsurf_teal_logo.svg" />,
    description: 'Revolutionary AI-powered development platform that transforms natural language into full-stack applications.',
    features: [
      'Natural language to code',
      'Full-stack app generation',
      'Component library',
      'Real-time preview',
      'Free during beta'
    ],
    link: 'https://windsurf.ai',
    experienceLevel: 'expert'
  },
  {
    id: 'lovable',
    name: 'Lovable.dev',
    icon: <Heart size={32} weight="fill" />,
    description: 'Build faster with AI that understands your needs. Get working code from natural language. Chat about your product idea in English.',
    features: [
      'Task automation',
      'Data analysis',
      'User-friendly interface',
      'Real-time insights',
      'Scalability'
    ],
    link: 'https://lovable.dev',
    experienceLevel: 'beginner'
  },
  {
    id: 'supermaven',
    name: 'Supermaven',
    icon: <img width={32} src="/supermaven.webp" />,
    description: 'Copilot with a 1 million token context window.',
    features: [
      '1 million token context window',
      'Compatible with VS Code, JetBrains, and Neovim',
      'GPT-4 and Claude 3.5 Sonnet integration',
      'Advanced chat interface',
      'Free tier available, Pro at $10/month'
    ],
    link: 'https://supermaven.com',
    experienceLevel: 'expert'
  },
  {
    id: 'project-idx',
    name: 'Project IDX',
    icon: <img width={32} src="/project-idx.png" />, // You'll need to add this icon
    description: 'Google\'s browser-based development experience powered by AI, offering features like code generation, chat, and more.',
    features: [
      'AI-powered code completion',
      'Integrated development environment',
      'Built-in preview',
      'Chat with Gemini',
      'Currently in Beta'
    ],
    link: 'https://idx.dev',
    experienceLevel: 'beginner' // You can adjust this based on your assessment
  }
];