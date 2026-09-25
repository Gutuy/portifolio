import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Experience } from '../../models/portfolio.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  private portfolioService = inject(PortfolioService);
  experiences: Experience[] = this.portfolioService.experiences;

  education = [
    {
      degree: 'BSc in Computer Science',
      institution: 'Jimma University',
      period: '2021 - 2024',
      details: 'Comprehensive coursework and project work in Software Engineering, Data Structures, Web Development, and Networking.'
    },
    {
      degree: 'Preparatory Certificate',
      institution: 'Kellem Preparatory School',
      period: '2019 - 2020',
      details: 'Natural Science.'
    }
  ];

  competencies = [
    { name: 'Application Security & Defensive Coding', issuer: 'INSA Standards' },
    { name: 'Angular & Modern Web Systems', issuer: 'Frontend Engineering' },
    { name: '.NET & Enterprise REST APIs', issuer: 'Backend Engineering' },
    { name: 'Database Design & Management', issuer: 'PostgreSQL / MySQL' }
  ];
}
