import { type ReactNode } from 'react';

export type ExperienceLevel = 'beginner' | 'expert';

export interface Assistant {
  id: string;
  name: string;
  icon: ReactNode;
  description: string;
  features: string[];
  link: string;
  experienceLevel: ExperienceLevel;
}