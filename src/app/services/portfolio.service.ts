import { Injectable } from '@angular/core';
import { Project, SkillCategory, Experience, StatItem, SocialLink } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  /**
   * Gutu's Profile Information - Grounded, natural, and human
   */
  readonly profile = {
    name: 'Gutu Yaekob',
    fullName: 'Gutu Yaekob Chibsa',
    role: 'Software Developer',
    tagline: 'Building dependable, user-friendly web applications with Angular, .NET, and modern technologies.',
    about: `I am a Computer Science graduate from Jimma University and a software developer based in Addis Ababa, Ethiopia. I work as an Application Software Developer at INSA, focusing on building clean, secure, and responsive web applications. I enjoy collaborating with teams to deliver dependable software that meets real user needs.`,
    location: 'Addis Ababa, Ethiopia',
    email: 'gutuyaekob2021@gmail.com',
    phone: '+251 919 51 64 29',
    avatar: 'profile.jpg',
    resumeUrl: 'Gutu Yaekob professional Cv.pdf',
    availableForHire: true
  };

  /**
   * Simple, authentic stats
   */
  readonly stats: StatItem[] = [
    { value: '2+', label: 'Years Experience', subtext: 'Software and web development' },
    { value: '10+', label: 'Projects Built', subtext: 'Full-stack and frontend apps' },
    { value: '1+', label: 'Live Systems', subtext: 'In active production use' }
  ];

  /**
   * Core Skills & Technologies
   */
  readonly skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: 'code',
      skills: [
        { name: 'Angular (17/18)', level: 90 },
        { name: 'TypeScript & JavaScript', level: 88 },
        { name: 'HTML5 & CSS3 / SCSS', level: 92 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Responsive Web Design', level: 90 }
      ]
    },
    {
      title: 'Backend & Databases',
      icon: 'server',
      skills: [
        { name: '.NET / C#', level: 85 },
        { name: 'Node.js & Express', level: 82 },
        { name: 'RESTful APIs', level: 88 },
        { name: 'PostgreSQL & MySQL', level: 84 },
        { name: 'MongoDB', level: 78 }
      ]
    },
    {
      title: 'Tools & Practices',
      icon: 'tool',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Postman & Swagger', level: 88 },
        { name: 'Docker basics', level: 75 },
        { name: 'Figma', level: 80 },
        { name: 'Secure Coding Practices', level: 85 }
      ]
    }
  ];

  /**
   * Real Projects with actual local screenshots and live URLs
   */
  readonly projects: Project[] = [
    {
      id: '1',
      title: 'Edulink — Tutor Matching Platform',
      category: 'Full Stack',
      description: 'An educational web platform in Ethiopia connecting families and students with verified university tutors for personalized learning support.',
      image: 'edulink.jpg',
      tags: ['Web Development', 'JavaScript', 'Responsive UI', 'REST API'],
      liveUrl: 'https://edulinket.com/',
      featured: true
    },
    {
      id: '2',
      title: 'Blog Post Platform',
      category: 'Full Stack',
      description: 'A web-based blog post and article sharing platform with content authoring, clean reading layouts, categories, and responsive design across desktop and mobile devices.',
      image: 'blogpost.jpg',
      tags: ['Web Development', 'JavaScript', 'HTML/CSS', 'Responsive Design'],
      githubUrl: 'https://github.com/gutuy',
      featured: true
    }
  ];

  /**
   * Authentic work experience from Gutu's career
   */
  readonly experiences: Experience[] = [
    {
      role: 'Application Software Developer',
      company: 'Information Network Security Administration (INSA)',
      period: '2025 - Present',
      description: [
        'Contributed to the development of web application modules, feature implementations, and system testing.',
        'Implemented frontend interfaces, integrated backend services, and ensured secure data handling.',
        'Collaborated on feature development, testing, and deployment using Git and team coding standards.'
      ],
      technologies: ['Angular', '.NET', 'TypeScript', 'Git', 'REST APIs']
    },
    {
      role: 'Web Developer',
      company: 'GeniusCamp (Online)',
      period: '2024 - 2025',
      description: [
        'Built and maintained responsive web applications using frontend and backend technologies.',
        'Collaborated with teams to implement user-facing features, fix bugs, and improve reliability.'
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'Node.js', 'Git']
    },
    {
      role: 'Web Development Intern',
      company: 'Dembi Dollo University',
      period: '2024',
      description: [
        'Developed web application features and strengthened skills in full-stack software development.',
        'Assisted with campus network infrastructure and IT support.'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS']
    }
  ];

  /**
   * Direct contact links
   */
  readonly socialLinks: SocialLink[] = [
    { platform: 'GitHub', url: 'https://github.com/gutuy', icon: 'github', label: 'GitHub Profile' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/gutu-yaekob-276b2b28a', icon: 'linkedin', label: 'LinkedIn Profile' },
    { platform: 'Email', url: 'mailto:gutuyaekob2021@gmail.com', icon: 'mail', label: 'Direct Email' },
    { platform: 'Phone', url: 'tel:+251919516429', icon: 'phone', label: 'Direct Phone' }
  ];
}
