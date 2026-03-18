import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LucideAngularModule, X, Menu } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { ScrollSpyService } from '../services/scroll-spy.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LucideAngularModule, CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  readonly Menu = Menu;
  readonly X = X;

  activeSection = '';
  private subscriptions: Subscription[] = [];
  private isBrowser: boolean;

  constructor(
    private scrollSpyService: ScrollSpyService,
    @Inject(PLATFORM_ID) platformId: any,
    private cdr: ChangeDetectorRef,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  sections = [
    { title: 'The Problem', fragment: 'the-problem' },
    { title: 'Solutions', fragment: 'solutions' },
    { title: 'Use Cases', fragment: 'use-cases' },
    { title: 'How It Works', fragment: 'how-it-works' },
    { title: 'Pricing', fragment: 'pricing' },
    { title: 'Contact', fragment: 'contact' },
  ];

  isMobileMenuOpen = false;

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToTop() {
    if (!this.isBrowser) {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    window.history.pushState({}, '', '/');
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
    }
  }

  scrollToSection(fragment: string) {
    if (!this.isBrowser) {
      return;
    }

    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
    }

    const element = document.getElementById(fragment);
    if (!element) return;

    const headerOffset = 64;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      if (fragment === 'hero') {
        window.history.pushState({}, '', '/');
      } else {
        window.history.pushState({}, '', `/${fragment}`);
      }
      this.scrollSpyService.setActiveSectionManual(fragment);
    }
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.subscriptions.push(
        this.scrollSpyService.activeSection$.subscribe((section) => {
          if (section && section.trim() !== '') {
            this.activeSection = section;
            this.cdr.detectChanges();
          }
        }),
      );
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
