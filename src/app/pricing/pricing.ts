import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Check } from 'lucide-angular';
import { PricingCardComponent } from '../pricing-card/pricing-card';
import { SectionHeadingComponent } from '../section-heading/section-heading';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [PricingCardComponent, CommonModule, LucideAngularModule, SectionHeadingComponent],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.css'],
})
export class PricingComponent {
  readonly Check = Check;

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

  features = [
    {
      tagName: '',
      tagColor: 'text-white',
      tagBackgroundColor: 'bg-[red]',
      isMostPopular: false,
      title: 'Title',
      textColor: 'text-black',
      lead: 'Lead',
      isSmallPrice: false,
      price: '128',
      pricePeriod: '/mo',
      featuresList: [
        '5 active workflows',
        '10,000 automation runs / month',
        '1 user seat',
        '10 integrations',
        'FluxBot (basic)',
        'Email support',
        'Community access',
      ],
      featureIcon: Check,
      btnContent: 'Start Free Trial',
      btnColor: 'text-white',
      btnBackgroundColor: 'bg-[blue]',
      btnHoverBackgroundColor: 'hover:bg-[#133fc9]',
      btnFunctionName: (fragment: string) => this.scrollToSection(fragment),
      functionParams: 'contact',
    },
    {
      tagName: 'Most Popular',
      tagColor: '',
      tagBackgroundColor: '',
      isMostPopular: true,
      title: 'Growth',
      textColor: 'text-black',
      lead: 'For growing teams that need more power and flexibility.',
      isSmallPrice: false,
      price: '149',
      pricePeriod: '/mo',
      featuresList: [
        '25 active workflows',
        '100,000 automation runs / month',
        '5 user seats',
        '10 integrations',
        'Unlimited integrations',
        'FluxBot + FluxFlow + FluxInsight',
        'Priority email & chat support',
        'Advanced analytics dashboard',
        'Custom triggers & webhooks',
      ],
      featureIcon: Check,
      btnContent: 'Start Free Trial',
      btnColor: '',
      btnBackgroundColor: '',
      btnHoverBackgroundColor: '',
      btnFunctionName: (fragment: string) => this.scrollToSection(fragment),
      functionParams: 'contact',
    },
    {
      tagName: '',
      tagColor: '',
      tagBackgroundColor: '',
      isMostPopular: false,
      title: 'Enterprise',
      textColor: '',
      lead: 'Tailored for large organizations with complex needs and compliance requirements.',
      isSmallPrice: true,
      price: 'Custom',
      pricePeriod: '',
      featuresList: [
        'Unlimited workflows',
        'Unlimited automation runs',
        'Unlimited user seats',
        'All Fluxia products included',
        'Dedicated AI agent infrastructure',
        'SLA-backed uptime guarantee',
        'Dedicated success manager',
        'SSO, SAML, advanced security',
        'Custom reporting & data exports',
      ],
      featureIcon: Check,
      btnContent: 'Start Free Trial',
      btnColor: '',
      btnBackgroundColor: '',
      btnHoverBackgroundColor: '',
      btnFunctionName: (fragment: string) => this.scrollToSection(fragment),
      functionParams: 'contact',
    },
  ];
}
