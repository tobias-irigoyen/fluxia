import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, CircleCheck, TrendingUp, Heart, Users, Headphones, ShoppingBag, Megaphone } from 'lucide-angular';
import { SectionHeadingComponent } from '../section-heading/section-heading';

@Component({
  selector: 'app-use-cases',
  imports: [CommonModule, LucideAngularModule, SectionHeadingComponent],
  standalone: true,
  templateUrl: './use-cases.html',
  styleUrls: ['./use-cases.css'],
})
export class UseCasesComponent {

readonly CircleCheck = CircleCheck;
readonly TrendingUp = TrendingUp;
readonly Heart = Heart;
readonly Users = Users;
readonly Headphones = Headphones;
readonly ShoppingBag = ShoppingBag;
readonly Megaphone = Megaphone;


  isActive = true;
  activeCategory = 'finance';

 showCategory(category: string) {
    this.activeCategory = category;
  }
  filters = [
    {
      id: 1,
      title: 'Finance',
      category: 'finance',
      icon: TrendingUp,
      bgIcon: 'bg-[#155dfc]',
      leftTitle: 'Automate financial operations end-to-end',
      leftLead: 'From invoice processing to fraud detection, Fluxia empowers finance teams to close faster, report accurately, and stay compliant — without adding headcount.',      
      percentage: '70%',
      rightSubtitle: 'reduction in processing time',
      rightLead: 'Average results reported by Fluxia customers after 90 days.',
      features: [
        'Automated invoice matching & AP processing',
        'Real-time fraud detection with AI scoring',
        'Regulatory compliance monitoring',
        'Predictive cash flow forecasting'
      ]
    },
    {
      id: 2,
      title: 'HR & People',
      category: 'hr',
      icon: Users,
      bgIcon: 'bg-[#7f22fe]',
      leftTitle: 'Streamline hiring and employee operations',
      leftLead: 'Automate resume screening, onboarding workflows, performance reviews, and more — so your HR team can spend time on culture, not paperwork.',      
      percentage: '60%',
      rightSubtitle: 'faster time-to-hire',
      rightLead: 'Average results reported by Fluxia customers after 90 days.',
      features: [
        'AI-powered candidate screening & ranking',
        'Automated onboarding task orchestration',
        'Employee sentiment analysis',
        'Leave & payroll workflow automation'
      ]
    },
    {
      id: 3,
      title: 'Customer Service',
      category: 'customer',
      icon: Headphones,
      bgIcon: 'bg-[#096]',
      leftTitle: 'Deliver instant, intelligent customer support',
      leftLead: 'Deploy AI agents that resolve the majority of tickets without human intervention — and hand off to agents with full context when needed.',      
      percentage: '80%',
      rightSubtitle: 'queries resolved automatically',
      rightLead: 'Average results reported by Fluxia customers after 90 days.',
      features: [
        '24/7 AI chat with human escalation',
        'Auto-routing to the right team',
        'Sentiment-aware response generation',
        'Post-interaction feedback automation'
      ]
    },
    {
      id: 4,
      title: 'E-Commerce',
      category: 'ecommerce',
      icon: ShoppingBag,
      bgIcon: 'bg-[#f54900]',
      leftTitle: 'Scale operations without scaling headcount',
      leftLead: 'From order management to personalized recommendations and return processing, Fluxia keeps your e-commerce engine running smoothly at scale.',      
      percentage: '3x',
      rightSubtitle: 'increase in operational capacity',
      rightLead: 'Average results reported by Fluxia customers after 90 days.',
      features: [
        'Automated order fulfillment & tracking',
        'AI-driven product recommendations',
        'Returns & refund workflow automation',
        'Inventory reorder triggers'
      ]
    },
    {
      id: 5,
      title: 'Healthcare',
      category: 'healthcare',
      icon: Heart,
      bgIcon: 'bg-[#ec003f]',
      leftTitle: 'Reduce admin burden and improve patient experience',
      leftLead: 'Automate appointment scheduling, patient intake, claims processing, and care coordination — so clinicians can focus on care.',      
      percentage: '45%',
      rightSubtitle: 'less administrative overhead',
      rightLead: 'Average results reported by Fluxia customers after 90 days.',
      features: [
        'Intelligent appointment scheduling',
        'Automated insurance claims processing',
        'Patient communication workflows',
        'Compliance documentation automation'
      ]
    },
    {
      id: 6,
      title: 'Marketing',
      category: 'marketing',
      icon: Megaphone,
      bgIcon: 'bg-[#0084d1]',
      leftTitle: 'Run smarter campaigns with less effort',
      leftLead: 'Use AI to personalize at scale, automate lead nurturing, and optimize spend — turning your marketing ops into a revenue-generating machine.',      
      percentage: '2.4x',
      rightSubtitle: 'improvement in lead conversion',
      rightLead: 'Average results reported by Fluxia customers after 90 days.',
      features: [
        'AI-powered lead scoring & nurturing',
        'Automated campaign A/B testing',
        'Content personalization at scale',
        'Attribution & ROI reporting'
      ]
    }
  ];
}


