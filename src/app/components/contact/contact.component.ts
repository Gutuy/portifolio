import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private portfolioService = inject(PortfolioService);
  private fb = inject(FormBuilder);

  profile = this.portfolioService.profile;
  socialLinks = this.portfolioService.socialLinks;

  contactForm: FormGroup;
  isSubmitting = false;
  isSubmitted = false;
  copySuccess = false;
  copyPhoneSuccess = false;

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      // Simulate network request to send message
      setTimeout(() => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        this.contactForm.reset();

        // Reset success notification after 6 seconds
        setTimeout(() => {
          this.isSubmitted = false;
        }, 6000);
      }, 1200);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  copyEmail() {
    navigator.clipboard.writeText(this.profile.email).then(() => {
      this.copySuccess = true;
      setTimeout(() => {
        this.copySuccess = false;
      }, 2500);
    });
  }

  copyPhone() {
    if (this.profile.phone) {
      navigator.clipboard.writeText(this.profile.phone).then(() => {
        this.copyPhoneSuccess = true;
        setTimeout(() => {
          this.copyPhoneSuccess = false;
        }, 2500);
      });
    }
  }
}
