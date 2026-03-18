  import { Component, Input } from '@angular/core';
  import { LucideAngularModule, LucideIconData, Zap } from 'lucide-angular';
  import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-pricing-card',
    standalone: true,
    imports: [LucideAngularModule, CommonModule],
    templateUrl: './pricing-card.html',
    styleUrls: ['./pricing-card.css'],
  })
  export class PricingCardComponent {
    readonly Zap = Zap;

    @Input() tagName!: string;
    @Input() tagColor!: string;
    @Input() tagBackgroundColor!: string;
    @Input() isMostPopular!: Boolean;
    @Input() title!: string;
    @Input() textColor!: string;
    @Input() lead!: string;
    @Input() price!: string;
    @Input() isSmallPrice!: Boolean;
    @Input() pricePeriod!: string;
    @Input() featuresList!: string[];
    @Input() featureIcon!: LucideIconData;
    @Input() btnContent!: string;
    @Input() btnBackgroundColor!: string;
    @Input() btnHoverBackgroundColor!: string;
    @Input() btnColor!: string;
    @Input() btnFunctionName!: (fragment: string) => void;
    @Input() functionParams!: string;
  }
