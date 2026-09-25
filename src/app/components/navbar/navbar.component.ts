import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // Flag to check if page is scrolled past threshold (adds frosted glass background)
  isScrolled = false;
  
  // Flag to toggle mobile drawer menu open/closed
  isMobileMenuOpen = false;

  // Active section to highlight corresponding nav link
  activeSection = 'hero';

  navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  /**
   * Listen to the browser window scroll event.
   * When user scrolls more than 50px, add a blur/shadow glass effect to the navbar.
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 40;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  scrollTo(targetId: string, event: Event) {
    event.preventDefault();
    this.closeMobileMenu();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
