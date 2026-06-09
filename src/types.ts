export interface Skill {
  name: string;
  category: 'programming' | 'frontend' | 'backend' | 'database' | 'tools' | 'ai-tools' | 'blockchain';
  level: number; // percentage out of 100 for interactive sliders
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  category: 'web' | 'blockchain' | 'desktop-ai';
  technologies: string[];
  metrics?: string;
  status: 'Featured' | 'Hackathon' | 'Completed';
  githubLink?: string;
  liveLink?: string;
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  duration: string;
  score: string;
  location: string;
}

export interface InternshipTask {
  id: number;
  title: string;
  description: string;
  details: string[];
  skillsGained: string[];
  metric?: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  details: string;
  badge?: string;
}

export interface AchievementItem {
  title: string;
  description: string;
  category: string;
  meta?: string;
}

export interface AIModelLearned {
  name: string;
  description: string;
  learningOutcome: string;
  tags: string[];
  sentiment: string; // e.g., "Favorite", "Excellent Research tool" etc.
}
