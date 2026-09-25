import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  private portfolioService = inject(PortfolioService);
  profile = this.portfolioService.profile;
  socialLinks = this.portfolioService.socialLinks;

  // Clean, realistic roles
  titles = [
    'Software Developer',
    'Full Stack Developer',
    'Angular & .NET Engineer'
  ];
  currentTitle = '';
  private titleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingInterval: any;

  ngOnInit() {
    this.startTypewriter();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
    }
  }

  startTypewriter() {
    const fullText = this.titles[this.titleIndex];
    const speed = this.isDeleting ? 35 : 75;

    if (!this.isDeleting && this.charIndex < fullText.length) {
      this.currentTitle = fullText.substring(0, this.charIndex + 1);
      this.charIndex++;
    } else if (this.isDeleting && this.charIndex > 0) {
      this.currentTitle = fullText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else if (!this.isDeleting && this.charIndex === fullText.length) {
      this.isDeleting = true;
      this.typingInterval = setTimeout(() => this.startTypewriter(), 2000);
      return;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.titleIndex = (this.titleIndex + 1) % this.titles.length;
    }

    this.typingInterval = setTimeout(() => this.startTypewriter(), speed);
  }

  scrollTo(targetId: string, event: Event) {
    event.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
