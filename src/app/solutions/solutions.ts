  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { LucideAngularModule, Bot, Workflow, ChartColumn, Cpu, Settings2, Plug, MoveRight } from 'lucide-angular';
  import { SectionHeadingComponent } from '../section-heading/section-heading';

  @Component({
    selector: 'app-solutions',
    standalone: true,
    imports: [CommonModule, LucideAngularModule, SectionHeadingComponent],
    templateUrl: './solutions.html',
    styleUrls: ['./solutions.css'],
  })
  export class SolutionsComponent {
    readonly Bot = Bot;
    readonly Workflow = Workflow;
    readonly ChartColumn = ChartColumn;
    readonly Cpu = Cpu;
    readonly Settings2 = Settings2;
    readonly Plug = Plug;   
    readonly MoveRight = MoveRight;   

    solutions = [
      {
        icon: Bot,
        iconBackground: '#eff6ff',
        iconColor: '#155dfc',
        title: 'FluxBot',
        subtitle: 'AI Chat & Support',
        description: 'Resolve 80% of customer queries instantly with AI agents that understand context, tone, and intent — 24/7.',
        cta: 'Learn More',
        ctaButton: MoveRight
      },
      {
        icon: Workflow,
        iconBackground: '#f5f3ff',
        iconColor: '#7f22fe',
        title: 'FluxFlow',
        subtitle: 'Workflow Orchestration',
        description: 'Visually design and automate multi-step business processes across your entire tech stack without code.',
        cta: 'Learn More',
        ctaButton: MoveRight
      },
      {
        icon: ChartColumn,
        iconBackground: '#ecfdf5',
        iconColor: '#096',
        title: 'FluxInsight',
        subtitle: 'Predictive Analytics',
        description: 'Turn raw data into predictive intelligence. Forecast trends, detect anomalies, and act before issues arise.',
        cta: 'Learn More',
        ctaButton: MoveRight
      },
      {
        icon: Cpu,
        iconBackground: '#fff7ed',
        iconColor: '#f54900',
        title: 'FluxAgent',
        subtitle: 'Autonomous AI Agents',
        description: 'Deploy self-directed AI agents that research, decide, and act on your behalf across complex workflows.',
        cta: 'Learn More',
        ctaButton: MoveRight
      },
      {
        icon: Settings2,
        iconBackground: '#f0f9ff',
        iconColor: '#0084d1',
        title: 'FluxOps',
        subtitle: 'Operational Intelligence',
        description: 'Monitor and optimize operations in real time. Spot inefficiencies and automate corrective actions instantly.',
        cta: 'Learn More',
        ctaButton: MoveRight
      },
      {
        icon: Plug,
        iconBackground: '#fdf2f8',
        iconColor: '#e60076',
        title: 'FluxSync',
        subtitle: 'Smart Integrations',
        description: 'Connect 200+ apps in one click. Data flows seamlessly between your CRM, ERP, and every tool in your stack.',
        cta: 'Learn More',
        ctaButton: MoveRight
      },
    ];
  }
