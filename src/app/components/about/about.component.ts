import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  private portfolioService = inject(PortfolioService);
  profile = this.portfolioService.profile;
  stats = this.portfolioService.stats;

  highlights = [
    { title: 'Frontend Development', desc: 'Building responsive, clean web apps using Angular, TypeScript, and modern CSS/Tailwind.' },
    { title: 'Backend & APIs', desc: 'Developing reliable RESTful services and database interactions with .NET, C#, and Node.js.' },
    { title: 'Secure Enterprise Systems', desc: 'Hands-on experience at INSA building secure web platforms with strict code standards.' },
    { title: 'Computer Science Degree', desc: 'BSc in Computer Science from Jimma University (Class of 2024).' }
  ];
}
