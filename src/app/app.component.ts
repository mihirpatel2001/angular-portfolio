import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';
import { SeoService } from './shared/services/seo.service';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { CertificationsComponent } from "./components/certifications/certifications.component";
import { ContactComponent } from "./components/contact/contact.component";
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    CertificationsComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio';
  private lenis: Lenis | null = null;
  private rafId: number | null = null;
  

  /**
   * Toggle this to enable/disable Lenis smooth scroll
   * Set to true = Lenis ON (smooth scroll)
   * Set to false = Lenis OFF (native scroll)
   */
  private enableLenisScroll: boolean = true;

  constructor(
    private themeService: ThemeService,
    private seoService: SeoService
  ) {
    // Initialize theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }

  ngOnInit(): void {
    // Initialize SEO
    this.initializeSEO();

    // Only initialize Lenis if enabled
    if (this.enableLenisScroll) {
      // Initialize Lenis smooth scroll
      this.lenis = new Lenis({
        lerp: 0.075, // Optimal balance: smooth & responsive (try 0.05 for ultra-smooth, 0.15 for snappy)
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth deceleration curve
        orientation: 'vertical', // Scroll direction: 'vertical' or 'horizontal'
        gestureOrientation: 'vertical', // Gesture direction
        smoothWheel: true, // Enable smooth scroll with mouse wheel
        wheelMultiplier: 1, // Mouse wheel scroll speed (try 0.7 for slower, 1.5 for faster)
        touchMultiplier: 2, // Touch scroll speed on mobile
        infinite: false, // Disable infinite scroll
        autoResize: true, // Auto-recalculate on window resize
      });

      // Start the animation loop
      this.raf();
    }
  }

  private initializeSEO(): void {
    // Set default SEO tags
    this.seoService.updateTags({
      title: 'Mihir Patel - Full Stack Developer | Portfolio',
      description: 'Portfolio of Mihir Patel, a Full Stack Developer specializing in modern web technologies. Explore my projects, skills, and experience.',
      keywords: 'Mihir Patel, Full Stack Developer, Web Developer, Portfolio, Angular, React, Node.js',
      type: 'website'
    });

    // Add Person structured data
    this.seoService.addPersonStructuredData({
      name: 'Mihir Patel',
      jobTitle: 'Full Stack Developer',
      description: 'Full Stack Developer specializing in modern web technologies including Angular, React, and Node.js',
      url: 'https://mihirpatel.dev', // Update with your actual domain
      sameAs: [
        // Add your social media profiles here
        // 'https://github.com/yourusername',
        // 'https://linkedin.com/in/yourusername',
        // 'https://twitter.com/yourusername'
      ]
    });

    // Add Website structured data
    this.seoService.addWebsiteStructuredData({
      name: 'Mihir Patel Portfolio',
      url: 'https://mihirpatel.dev', // Update with your actual domain
      description: 'Portfolio website of Mihir Patel, Full Stack Developer'
    });
  }

  private raf(): void {
    const scroll = (time: number) => {
      this.lenis?.raf(time);
      this.rafId = requestAnimationFrame(scroll);
    };
    this.rafId = requestAnimationFrame(scroll);
  }

  ngOnDestroy(): void {
    // Clean up Lenis and animation frame
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
    }
    this.lenis?.destroy();
  }
} 