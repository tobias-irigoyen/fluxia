import { Component } from '@angular/core';
import {
  LucideAngularModule,
  LucideIconData,
  Twitter,
  Linkedin,
  Github,
  Youtube,
} from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class FooterComponent {
  readonly Twitter = Twitter;
  readonly Linkedin = Linkedin;
  readonly Github = Github;
  readonly Youtube = Youtube;

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    window.history.pushState({}, '', '/');
  }

  scrollToSection(fragment: string) {
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
    }
  }

  footerInfo = {
    firstColumn: {
      title: 'Fluxia',
      lead: 'Intelligent automation for modern businesses. Built for scale, designed for people.',
      icons: [
        {
          title: 'Twitter', 
          icon: Twitter,
          href: 'https://x.com/fluxi-ai',
        },
        {
          title: 'LinkedIn',
          icon: Linkedin,
          href: 'https://www.linkedin.com/company/fluxia-ai/',
        },
        {
          title: 'YouTube',
          icon: Youtube,
          href: 'https://www.youtube.com/@fluxia-ai',
        }
      ]
    },

    columns: [
      {
        title: 'Site',
        links: [
          { title: 'Solutions', href: 'solutions' },
          { title: 'Use Cases', href: 'use-cases' },
          { title: 'How it Works', href: 'how-it-works' },
          { title: 'Pricing', href: 'pricing' },
          { title: 'Contact', href: 'contact' },
        ],
        isScroll: true,
      },
      {
        title: 'Product',
        links: [
          { title: 'FluxBot', href: '#' },
          { title: 'FluxFlow', href: '#' },
          { title: 'FluxInsight', href: '#' },
          { title: 'FluxAgent', href: '#' },
          { title: 'Integrations', href: '#' },
          { title: 'Changelog', href: '#' },
        ],
      },
      {
        title: 'Solutions',
        links: [
          { title: 'Finance', href: 'solutions' },
          { title: 'HR & People', href: 'solutions' },
          { title: 'Customer Service', href: 'solutions' },
          { title: 'E-Commerce', href: 'solutions' },
          { title: 'Healthcare', href: 'solutions' },
          { title: 'Marketing', href: 'solutions' },
        ],
      },
      {
        title: 'Company',
        links: [
          { title: 'About', href: '#' },
          { title: 'Blog', href: '#' },
          { title: 'Careers', href: '#' },
          { title: 'Press', href: '#' },
          { title: 'Partners', href: '#' },
          { title: 'Contact', href: 'contact' },
        ],
      },
    ],

    subFooter: {
      copyright: '© 2026 Fluxia, Inc. All rights reserved.',
      rightLinks: [
        { title: 'Privacy Policy', href: '#' },
        { title: 'Terms of services', href: '#' },
        { title: 'Cookie Settings', href: '#' },
      ],
    },
  };
}
