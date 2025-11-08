import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
  @Input() id: string = 'certifications';
  
  certifications = [
    {
      title: 'Angular Development',
      issuer: 'Example Certification',
      date: '2024',
      description: 'Advanced Angular development certification covering modern web development practices.',
      icon: 'fas fa-certificate'
    },
    // Add more certifications as needed
  ];
} 