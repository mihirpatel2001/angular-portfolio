import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() id: string = 'projects';
  projects = [
    {
      title: 'Angular Dashboard',
      description: 'A comprehensive admin dashboard built with Angular, featuring real-time data visualization and customizable widgets.',
      icon: 'fab fa-angular',
      tags: ['Angular', 'NgRx', 'Chart.js']
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online store with product catalog, cart functionality, and secure checkout process.',
      icon: 'fas fa-shopping-cart',
      tags: ['Angular', 'Firebase', 'Stripe']
    },
    {
      title: 'Video Streaming App',
      description: 'Netflix-like platform with video streaming, user profiles, and recommendation engine.',
      icon: 'fas fa-video',
      tags: ['Angular', 'Node.js', 'MongoDB']
    },
    {
      title: 'Task Management',
      description: 'Kanban-style task manager with drag-and-drop functionality, team collaboration, and analytics.',
      icon: 'fas fa-tasks',
      tags: ['Angular', 'WebSockets', 'D3.js']
    },
    {
      title: 'AI Chat Assistant',
      description: 'Conversational AI interface with natural language processing and contextual responses.',
      icon: 'fas fa-robot',
      tags: ['Angular', 'Python', 'TensorFlow']
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure financial application with transaction history, budgeting tools, and biometric authentication.',
      icon: 'fas fa-mobile-alt',
      tags: ['Ionic', 'Angular', 'Capacitor']
    }
  ];
} 