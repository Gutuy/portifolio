import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { SkillCategory } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  private portfolioService = inject(PortfolioService);
  skillCategories: SkillCategory[] = this.portfolioService.skillCategories;

  // Active filter tab ('all' or category index)
  activeTab = 0;

  // Infinite ticker technology pills
  techPills = [
    'Angular 18', 'TypeScript', '.NET & C#', 'OpenLayers GIS',
    'RxJS & Signals', 'HTML5 & SCSS', 'TailwindCSS', 'Node.js',
    'REST APIs', 'PostgreSQL', 'MongoDB', 'Docker',
    'Swagger & Postman', 'Git & GitHub', 'Figma UI/UX', 'Smart City Systems'
  ];

  selectTab(index: number) {
    this.activeTab = index;
  }
}
