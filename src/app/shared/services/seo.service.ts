import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private baseUrl = 'https://mihirpatel.dev'; // Update with your actual domain
  private defaultImage = `${this.baseUrl}/assets/og-image.jpg`; // Update with your OG image

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router
  ) {
    // Listen to route changes and update SEO
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateRouteSEO();
      });
  }

  /**
   * Update SEO tags for the current route
   */
  updateRouteSEO(): void {
    const url = this.router.url;
    const routeData = this.getRouteData(url);
    this.updateTags(routeData);
  }

  /**
   * Get SEO data based on route
   */
  private getRouteData(url: string): SEOData {
    const routeMap: { [key: string]: SEOData } = {
      '/home': {
        title: 'Mihir Patel - Full Stack Developer | Portfolio',
        description: 'Portfolio of Mihir Patel, a Full Stack Developer specializing in modern web technologies. Explore my projects, skills, and experience.',
        keywords: 'Mihir Patel, Full Stack Developer, Web Developer, Portfolio, Angular, React, Node.js',
        url: `${this.baseUrl}/home`,
        type: 'website'
      },
      '/about': {
        title: 'About Me - Mihir Patel | Full Stack Developer',
        description: 'Learn more about Mihir Patel, a passionate Full Stack Developer with expertise in modern web development technologies.',
        keywords: 'About Mihir Patel, Developer Bio, Full Stack Developer, Web Developer',
        url: `${this.baseUrl}/about`,
        type: 'website'
      },
      '/skills': {
        title: 'Skills & Technologies - Mihir Patel',
        description: 'Technical skills and technologies mastered by Mihir Patel including Angular, React, Node.js, and more.',
        keywords: 'Developer Skills, Technologies, Programming Languages, Web Development Skills',
        url: `${this.baseUrl}/skills`,
        type: 'website'
      },
      '/projects': {
        title: 'Projects - Mihir Patel | Portfolio',
        description: 'Explore the portfolio projects developed by Mihir Patel. Web applications, mobile apps, and innovative solutions.',
        keywords: 'Portfolio Projects, Web Applications, Software Projects, Developer Portfolio',
        url: `${this.baseUrl}/projects`,
        type: 'website'
      },
      '/experience': {
        title: 'Experience - Mihir Patel | Professional Journey',
        description: 'Professional experience and career journey of Mihir Patel as a Full Stack Developer.',
        keywords: 'Work Experience, Professional Experience, Developer Career, Job History',
        url: `${this.baseUrl}/experience`,
        type: 'website'
      },
      '/certifications': {
        title: 'Certifications - Mihir Patel',
        description: 'Professional certifications and credentials earned by Mihir Patel in web development and software engineering.',
        keywords: 'Certifications, Professional Credentials, Developer Certifications, Tech Certifications',
        url: `${this.baseUrl}/certifications`,
        type: 'website'
      },
      '/contact': {
        title: 'Contact - Mihir Patel | Get In Touch',
        description: 'Get in touch with Mihir Patel for collaboration, job opportunities, or project inquiries.',
        keywords: 'Contact Developer, Hire Developer, Collaboration, Project Inquiry',
        url: `${this.baseUrl}/contact`,
        type: 'website'
      }
    };

    return routeMap[url] || routeMap['/home'];
  }

  /**
   * Update all SEO meta tags
   */
  updateTags(data: SEOData): void {
    const title = data.title || 'Mihir Patel - Full Stack Developer | Portfolio';
    const description = data.description || 'Portfolio of Mihir Patel, a Full Stack Developer';
    const image = data.image || this.defaultImage;
    const url = data.url || this.baseUrl;
    const type = data.type || 'website';
    const keywords = data.keywords || 'Mihir Patel, Full Stack Developer, Web Developer, Portfolio';

    // Update title
    this.title.setTitle(title);

    // Basic meta tags
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    this.meta.updateTag({ name: 'author', content: data.author || 'Mihir Patel' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'language', content: 'English' });
    this.meta.updateTag({ name: 'revisit-after', content: '7 days' });

    // Open Graph tags (Facebook, LinkedIn, etc.)
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: type });
    this.meta.updateTag({ property: 'og:site_name', content: 'Mihir Patel Portfolio' });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
    this.meta.updateTag({ name: 'twitter:site', content: '@mihirpatel' }); // Update with your Twitter handle

    // Additional meta tags
    this.meta.updateTag({ name: 'theme-color', content: '#000000' });
    this.meta.updateTag({ name: 'apple-mobile-web-app-capable', content: 'yes' });
    this.meta.updateTag({ name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' });
  }

  /**
   * Add structured data (JSON-LD) to the page
   */
  addStructuredData(data: any): void {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }

  /**
   * Add Person structured data
   */
  addPersonStructuredData(personData: {
    name: string;
    jobTitle: string;
    description: string;
    url: string;
    image?: string;
    email?: string;
    sameAs?: string[];
  }): void {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: personData.name,
      jobTitle: personData.jobTitle,
      description: personData.description,
      url: personData.url,
      ...(personData.image && { image: personData.image }),
      ...(personData.email && { email: personData.email }),
      ...(personData.sameAs && { sameAs: personData.sameAs })
    };

    this.addStructuredData(structuredData);
  }

  /**
   * Add Website structured data
   */
  addWebsiteStructuredData(websiteData: {
    name: string;
    url: string;
    description: string;
  }): void {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: websiteData.name,
      url: websiteData.url,
      description: websiteData.description,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${websiteData.url}/search?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    };

    this.addStructuredData(structuredData);
  }

  /**
   * Add Portfolio/CreativeWork structured data
   */
  addPortfolioStructuredData(portfolioData: {
    name: string;
    description: string;
    url: string;
    creator: string;
  }): void {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: portfolioData.name,
      description: portfolioData.description,
      url: portfolioData.url,
      creator: {
        '@type': 'Person',
        name: portfolioData.creator
      }
    };

    this.addStructuredData(structuredData);
  }
}

