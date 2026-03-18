import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  imports: [],
  standalone: true,
  templateUrl: './section-heading.html',
  styleUrl: './section-heading.css',
})
export class SectionHeadingComponent {
    @Input() subheading!: string;
    @Input() title!: string;
    @Input() lead!: string;
}
