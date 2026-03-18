import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header';
import { SolutionsComponent } from '../solutions/solutions';
import { UseCasesComponent } from '../use-cases/use-cases';
import { HowItWorksComponent } from '../how-it-works/how-it-works';
import { PricingComponent } from '../pricing/pricing';
import { ContactComponent } from '../contact/contact';
import { HeroComponent } from '../hero/hero';
import { ProblemComponent } from '../problem/problem';
import { FooterComponent } from '../footer/footer';
import { ScrollSpyDirective } from '../directives/scroll-spy.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    SolutionsComponent,
    UseCasesComponent,
    HowItWorksComponent,
    PricingComponent,
    ContactComponent,
    ProblemComponent,
    FooterComponent,
    ScrollSpyDirective
  ],
  template: `
    <app-header></app-header>
    <main>
      <section id="hero" appScrollSpy>
        <app-hero></app-hero>
      </section>
    </main>
    <section id="the-problem" appScrollSpy>
      <app-problem></app-problem>
    </section>
    <section id="solutions" appScrollSpy>
      <app-solutions></app-solutions>
    </section>

    <section id="use-cases" appScrollSpy>
      <app-use-cases></app-use-cases>
    </section>

    <section id="how-it-works" appScrollSpy>
      <app-how-it-works></app-how-it-works>
    </section>

    <section id="pricing" appScrollSpy>
      <app-pricing></app-pricing>
    </section>

    <section id="contact" appScrollSpy>
      <app-contact></app-contact>
    </section>
    
    <app-footer></app-footer>
  `,
})
export class HomeComponent {}
