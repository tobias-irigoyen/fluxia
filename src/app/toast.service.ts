import {
  Injectable,
  inject,
  ComponentRef,
  ApplicationRef,
  createComponent,
  EnvironmentInjector,
} from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private overlay = inject(Overlay);
  private appRef = inject(ApplicationRef);
  private envInjector = inject(EnvironmentInjector);

  show(message: string, type: 'success' | 'error', duration: number = 3000): void {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().top('20px').right('20px'),
      hasBackdrop: false,
    });

    const portal = new ComponentPortal(ToastComponent);
    const componentRef = overlayRef.attach(portal);
    const instance = componentRef.instance;
    instance.message = message;
    instance.type = type;

    instance.close = () => {
      instance.closing = true;
      instance.cdr.detectChanges();
      setTimeout(() => {
        overlayRef.dispose();
      }, 300);
    };

    if (duration > 0) {
      setTimeout(() => {
        if (overlayRef.hasAttached()) {
          instance.closing = true;
          instance.cdr.detectChanges();
          setTimeout(() => {
            overlayRef.dispose();
          }, 300);
        }
      }, duration);
    }
  }

  success(message: string, duration: number = 3000): void {
    this.show(message, 'success', duration);
  }

  error(message: string, duration: number = 3000): void {
    this.show(message, 'error', duration);
  }
}

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="toast"
      [class.success]="type === 'success'"
      [class.error]="type === 'error'"
      [class.closing]="closing"
    >
      <div class="toast-content">
        <span *ngIf="type === 'success'" class="icon">✓</span>
        <span *ngIf="type === 'error'" class="icon">⚠</span>
        <span class="message">{{ message }}</span>
      </div>
      <button class="close-btn" (click)="close()">✕</button>
    </div>
  `,
  styles: [
    `
      .toast {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 14px 16px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        animation: slideIn 0.3s ease;
        min-width: 280px;
        max-width: 400px;
      }
      .toast.closing {
        animation: slideOut 0.3s ease forwards;
      }
      .toast.success {
        background-color: #22c55e;
      }
      .toast.error {
        background-color: #ef4444;
      }
      .toast-content {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .icon {
        font-size: 18px;
        font-weight: bold;
      }
      .message {
        font-size: 14px;
      }
      .close-btn {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 16px;
        padding: 4px;
        opacity: 0.8;
        transition: opacity 0.2s;
        line-height: 1;
      }
      .close-btn:hover {
        opacity: 1;
      }
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }
    `,
  ],
})
export class ToastComponent {
  message = '';
  type: 'success' | 'error' = 'success';
  closing = false;
  close = () => {};
  cdr = inject(ChangeDetectorRef);
}
