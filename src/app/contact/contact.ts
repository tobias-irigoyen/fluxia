import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../section-heading/section-heading';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Mail, Phone, MapPin, MoveRight, Send } from 'lucide-angular';
import { CtaComponent } from '../cta/cta';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    CtaComponent,
    CommonModule,
    LucideAngularModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent {
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly MapPin = MapPin;
  readonly MoveRight = MoveRight;
  readonly Send = Send;

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastService,
  ) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      workEmail: ['', [Validators.required, Validators.email]],
      company: [''],
      message: ['', Validators.required],
    });
  }

  asideInfo = [
    {
      asideTitle: 'Email us',
      asideInfo: 'hello@fluxia.ai',
      iconColor: '#155dfc',
      icon: Mail,
    },
    {
      asideTitle: 'Call us',
      asideInfo: '+1 (800) 359-2410',
      iconColor: '#155dfc',
      icon: Phone,
    },
    {
      asideTitle: 'Office',
      asideInfo: '340 Pine St, San Francisco, CA',
      iconColor: '#155dfc',
      icon: MapPin,
    },
  ];

  onSubmit(): void {
    const emailControl = this.contactForm.get('workEmail');
    const fullNameControl = this.contactForm.get('fullName');
    const messageControl = this.contactForm.get('message');

    const hasRequiredError =
      (fullNameControl?.hasError('required') && !fullNameControl?.value) ||
      (messageControl?.hasError('required') && !messageControl?.value);

    if (this.contactForm.valid) {
      this.toastr.success('Your message has been sent', 3000);
      this.contactForm.reset();
    } else if (emailControl?.value && emailControl.hasError('email')) {
      this.toastr.error('Please enter a valid email address.', 3000);
      this.contactForm.markAllAsTouched();
    } else if (hasRequiredError) {
      this.toastr.error('Please fill in all required fields.', 3000);
      this.contactForm.markAllAsTouched();
    }
  }
}
