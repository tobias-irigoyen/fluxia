import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { SolutionsComponent } from './app/solutions/solutions';
import { UseCasesComponent } from './app/use-cases/use-cases';
import { HowItWorksComponent } from './app/how-it-works/how-it-works';
import { PricingComponent } from './app/pricing/pricing';
import { ContactComponent } from './app/contact/contact';
import { HomeComponent } from './app/home/home';
import { ProblemComponent } from './app/problem/problem';
bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'the-problem', component: ProblemComponent },
      { path: 'solutions', component: SolutionsComponent },
      { path: 'use-cases', component: UseCasesComponent },
      { path: 'how-it-works', component: HowItWorksComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'contact', component: ContactComponent }
    ])
  ]
});