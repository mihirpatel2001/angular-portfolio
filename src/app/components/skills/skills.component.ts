import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  @Input() id: string = 'skills';

  selectedCategory: number = 0;

  skills = [
    {
      category: 'Frontend',
      icon: 'fab fa-angular',
      items: [
        { name: 'Angular', percentage: 90, animatedPercentage: 0 },
        { name: 'TypeScript', percentage: 85, animatedPercentage: 0 },
        { name: 'HTML/CSS', percentage: 95, animatedPercentage: 0 },
        { name: 'JavaScript', percentage: 90, animatedPercentage: 0 },
        { name: 'Responsive Design', percentage: 85, animatedPercentage: 0 },
      ],
    },
    {
      category: 'Backend',
      icon: 'fas fa-server',
      items: [
        { name: 'Node.js', percentage: 80, animatedPercentage: 0 },
        { name: 'Express', percentage: 75, animatedPercentage: 0 },
        { name: 'RESTful APIs', percentage: 85, animatedPercentage: 0 },
        { name: 'MongoDB', percentage: 70, animatedPercentage: 0 },
        { name: 'SQL', percentage: 75, animatedPercentage: 0 },
      ],
    },
    {
      category: 'Tools',
      icon: 'fas fa-tools',
      items: [
        { name: 'Git', percentage: 85, animatedPercentage: 0 },
        { name: 'Docker', percentage: 70, animatedPercentage: 0 },
        { name: 'VS Code', percentage: 90, animatedPercentage: 0 },
        { name: 'Figma', percentage: 80, animatedPercentage: 0 },
        { name: 'Jira', percentage: 75, animatedPercentage: 0 },
      ],
    },
  ];

  ngOnInit() {
    // Animate initial category on load
    setTimeout(() => {
      this.animatePercentages();
    }, 100);

    // Animate skill bars when component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateSkillBars();
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(this.id);
    if (element) {
      observer.observe(element);
    }
  }

  animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar) => {
      const width = bar.getAttribute('data-width');
      if (width) {
        (bar as HTMLElement).style.width = '0';
        setTimeout(() => {
          (bar as HTMLElement).style.width = width;
        }, 100);
      }
    });
  }

  selectCategory(index: number): void {
    this.selectedCategory = index;
    this.animatePercentages();
  }

  animatePercentages(): void {
    const duration = 1000; // Animation duration in ms
    const fps = 60; // Frames per second
    const totalFrames = (duration / 1000) * fps;
    const currentItems = this.skills[this.selectedCategory].items;

    // Reset all animated percentages to 0
    currentItems.forEach(item => {
      item.animatedPercentage = 0;
    });

    // Animate each skill's percentage
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic

      currentItems.forEach(item => {
        item.animatedPercentage = Math.round(item.percentage * easeOutProgress);
      });

      if (frame >= totalFrames) {
        // Ensure final values are exact
        currentItems.forEach(item => {
          item.animatedPercentage = item.percentage;
        });
        clearInterval(interval);
      }
    }, 1000 / fps);
  }
}
