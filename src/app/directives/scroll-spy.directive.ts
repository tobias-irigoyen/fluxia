import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  Inject,
  PLATFORM_ID,
  Input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollSpyService } from '../services/scroll-spy.service';

@Directive({
  selector: '[appScrollSpy]',
  standalone: true,
})
export class ScrollSpyDirective implements OnInit, OnDestroy {
  private scrollListener: (() => void) | null = null;
  private isBrowser: boolean;
  private scrollTimeout: any = null;
  @Input() scrollSpySection: string = '';

  constructor(
    private el: ElementRef,
    private scrollSpyService: ScrollSpyService,
    @Inject(PLATFORM_ID) platformId: any,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (!this.isBrowser) {
      return;
    }

    this.scrollListener = () => {
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
      this.scrollTimeout = setTimeout(() => {
        this.checkIfElementIsVisible();
      }, 50);
    };

    window.addEventListener('scroll', this.scrollListener, { passive: true });

    setTimeout(() => this.checkIfElementIsVisible(), 100);
  }

  ngOnDestroy() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    if (this.scrollListener && this.isBrowser) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private checkIfElementIsVisible() {
    if (!this.isBrowser) {
      return;
    }

    const element = this.el.nativeElement;
    if (!element || !element.id) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const headerOffset = 100;

    const isVisible = rect.top <= headerOffset && rect.bottom > headerOffset;

    if (isVisible) {
      this.scrollSpyService.setActiveSection(element.id);

      if (element.id === 'hero') {
        window.history.pushState({}, '', '/');
      } else {
        window.history.pushState({}, '', `/${element.id}`);
      }
    }
  }
}
