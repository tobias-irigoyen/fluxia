import { Component, Input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-it-works-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './how-it-works-card.html',
  styleUrl: './how-it-works-card.css',
})
export class HowItWorksCardComponent {
    @Input() title!: string;
    @Input() lead!: string;
    @Input() stepIndicator!: string;
    @Input() icon!: LucideIconData;
    @Input() iconBackground!: string;
    @Input() iconColor!: string;
}
