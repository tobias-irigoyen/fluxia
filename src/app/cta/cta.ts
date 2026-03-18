import { Component, Input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './cta.html',
  styleUrls: ['./cta.css'],
})
export class CtaComponent {
  @Input() flexDirection!: string;
  @Input() alignItems!: string;
  @Input() gap!: string;
  @Input() title!: string;
  @Input() titleColor!: string;
  @Input() lead!: string;
  @Input() leadColor!: string;
  @Input() ctaBackgroundColor!: string;
  @Input() btnBackgroundColor!: string;
  @Input() btnHoverBackgroundColor!: string;
  @Input() btnColor!: string;
  @Input() btnContent!: string;
  @Input() btnLeftIcon!: LucideIconData;
  @Input() btnLeftIconColor!: string;
  @Input() btnRightIcon!: LucideIconData;
  @Input() btnRightIconColor!: string;
  @Input() btnFunctionName!: Function;
}
