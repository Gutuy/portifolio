export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'Mobile' | 'AI / Cloud';
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: number; // percentage (0-100)
    iconName?: string;
  }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface StatItem {
  value: string;
  label: string;
  subtext: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}
