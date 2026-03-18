import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SectionHeadingComponent } from '../section-heading/section-heading';
import { Zap, TrendingUp, Link2, SlidersHorizontal, MoveRight } from 'lucide-angular';
import { HowItWorksCardComponent } from '../how-it-works-card/how-it-works-card';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../cta/cta';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, HowItWorksCardComponent, CtaComponent],
  templateUrl: './how-it-works.html',
  styleUrls: ['./how-it-works.css'],
})
export class HowItWorksComponent {
  readonly Link2 = Link2;
  readonly SlidersHorizontal = SlidersHorizontal;
  readonly TrendingUp = TrendingUp;
  readonly Zap = Zap;
  readonly MoveRight = MoveRight;


scrollToSection(fragment: string) {
  
  const element = document.getElementById(fragment);
  if (!element) return;

  const headerOffset = 64;

  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
  
  cards = [
    {
      title: "Connect your tools",
      lead: "Integrate your existing software stack in minutes. Fluxia supports 200+ native integrations — from Salesforce and HubSpot to Slack, Notion, and your internal APIs.",
      stepIndicator: "01",
      icon: Link2,
      iconBackground:"bg-[#155dfc]",
      iconColor: "white" 
    },
    {
      title: "Configure your workflows",
      lead: "Use our visual builder to map out your processes — no coding required. Set triggers, conditions, and actions with a drag-and-drop interface designed for business teams.",
      stepIndicator: "02",
      icon: SlidersHorizontal,
      iconBackground:"bg-[#155dfc]",
      iconColor: "white" 
    },
    {
      title: "Automate at scale",
      lead: "Activate your workflows and let Fluxia handle the rest. AI agents execute tasks, make decisions, and handle exceptions — all with full observability.",
      stepIndicator: "03",
      icon: Zap,
      iconBackground:"bg-[#155dfc]",
      iconColor: "white" 
    },
    {
      title: "Measure and optimize",
      lead: "Monitor performance through real-time dashboards. Identify bottlenecks, iterate on workflows, and scale what's working across your entire organization.",
      stepIndicator: "04",
      icon: TrendingUp,
      iconBackground:"bg-[#155dfc]",
      iconColor: "white" 
    }
  ]
}
