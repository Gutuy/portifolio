import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  private portfolioService = inject(PortfolioService);
  allProjects: Project[] = this.portfolioService.projects;

  // Selected category filter
  selectedCategory: string = 'All';

  categories: string[] = ['All', 'Full Stack', 'Frontend'];

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'All') {
      return this.allProjects;
    }
    return this.allProjects.filter(p => p.category === this.selectedCategory);
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }
}
