import { Component, HostListener, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, CircleCheckBig, MoveRight, Play, Mouse, ArrowDown } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
})
export class HeroComponent implements OnInit {

  readonly CircleCheckBig = CircleCheckBig;
  readonly MoveRight = MoveRight;
  readonly Play = Play;
  readonly Mouse = Mouse;
  readonly ArrowDown = ArrowDown;

  isMobile = false;

  ngOnInit() {
    this.checkMobile();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkMobile();
  }


  constructor(@Inject(DOCUMENT) private document: Document) {}

checkMobile() {
  const vpWidth = this.document.documentElement.clientWidth;
  this.isMobile = vpWidth < 768;
}

scrollTo(id: string) {
  const element = this.document.getElementById(id);

  if (element) {
    const yOffset = -64;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  }
}


  qualities = [
    'SOC 2 Compliant',
    '99.9% Uptime SLA',
    'Trusted by 500+ teams',
  ];
}