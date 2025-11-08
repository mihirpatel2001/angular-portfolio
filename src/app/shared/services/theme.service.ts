import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkMode.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode.next(true);
      document.documentElement.classList.add('dark');
    }
  }

  toggleTheme() {
    const newTheme = !this.isDarkMode.value;
    this.isDarkMode.next(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
} 