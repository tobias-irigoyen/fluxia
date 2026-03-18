  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { LucideAngularModule, CircleCheckBig, Clock, Database, TrendingDown, DollarSign, TriangleAlert, ClockFading } from 'lucide-angular';
  import { SectionHeadingComponent } from '../section-heading/section-heading';

  @Component({
    selector: 'app-problem',
    standalone: true,
    imports: [CommonModule, LucideAngularModule, SectionHeadingComponent],
    templateUrl: './problem.html',
    styleUrls: ['./problem.css'],
  })
  export class ProblemComponent {
    readonly CircleCheckBig = CircleCheckBig;
    readonly Clock = Clock;
    readonly Database = Database;
    readonly TrendingDown = TrendingDown;
    readonly DollarSign = DollarSign;
    readonly TriangleAlert = TriangleAlert;
    readonly ClockFading = ClockFading;


    problems = [
      {
        icon: Clock,
        title: 'Hours lost to manual work',
        description:
          'Teams spend up to 40% of their week on repetitive, low-value tasks that could be automated in minutes.',
      },
      {
        icon: Database,
        title: 'Disconnected data silos',
        description:
          "Critical business data is scattered across tools that don't talk to each other, causing blind spots and delays.",
      },
      {
        icon: TrendingDown,
        title: 'Slow decision-making',
        description:
          'Without real-time insights, decisions lag behind market changes — costing opportunities every day.',
      },
      {
        icon: DollarSign,
        title: 'Scaling costs ballooning',
        description:
          "Growing your team to handle volume is expensive. Operational costs scale linearly when they shouldn't.",
      },
      {
        icon: TriangleAlert,
        title: 'Human errors compounding',
        description:
          'Manual data entry and handoffs create mistakes that propagate downstream, eroding customer trust.',
      },
      {
        icon: ClockFading,
        title: 'Delayed customer responses',
        description:
          'Slow response times frustrate customers and increase churn — your competitors respond instantly.',
      },
    ];
  }
