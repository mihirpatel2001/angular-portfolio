import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  @Input() id: string = 'experience';
  experiences = [
    {
      title: 'Senior Angular Developer',
      period: '2022 - Present',
      company: 'TechSolutions Inc.',
      responsibilities: [
        'Led migration of legacy application to Angular, improving performance by 40%',
        'Implemented state management with NgRx, reducing API calls by 30%',
        'Mentored junior developers in Angular best practices and architecture',
        'Optimized build process, reducing production bundle size by 25%',
      ],
      tags: ['Angular', 'TypeScript', 'NgRx', 'RxJS'],
    },
    {
      title: 'Angular Developer',
      period: '2020 - 2022',
      company: 'Digital Innovations LLC',
      responsibilities: [
        'Developed 10+ customer-facing applications using Angular and Material UI',
        'Created reusable component library, saving 200+ development hours annually',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Improved accessibility compliance to WCAG 2.1 AA standards',
      ],
      tags: ['Angular', 'Material UI', 'Jest', 'Docker'],
    },
    {
      title: 'Frontend Developer',
      period: '2018 - 2020',
      company: 'WebCraft Studios',
      responsibilities: [
        'Built responsive web applications using Angular and Bootstrap',
        'Collaborated with designers to implement pixel-perfect UIs',
        'Reduced page load times by implementing lazy loading and code splitting',
        'Integrated RESTful APIs and implemented authentication flows',
      ],
      tags: ['AngularJS', 'Bootstrap', 'REST API', 'OAuth'],
    },
    {
      title: 'Master of Computer Applications (MCA)',
      period: '2015 - 2018',
      company: 'State University',
      responsibilities: [
        'Specialized in Web Technologies and Software Engineering',
        'Graduated with Distinction (GPA: 3.8/4.0)',
        'Thesis: "Performance Optimization in Single Page Applications"',
      ],
      tags: ['Web Development', 'Algorithms', 'Database Design'],
    },
  ];
}
