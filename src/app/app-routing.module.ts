// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home';
import { SolutionsComponent } from './solutions/solutions';
import { UseCasesComponent } from './use-cases/use-cases';
import { HowItWorksComponent } from './how-it-works/how-it-works';
import { PricingComponent } from './pricing/pricing';
import { ContactComponent } from './contact/contact';

const routes: Routes = [
  { path: '', component: HomeComponent },           // Home page con todas las secciones
  { path: 'solutions', component: SolutionsComponent },
  { path: 'use-cases', component: UseCasesComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }                    // fallback para rutas no definidas
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',  // recuerda la posición al volver
  anchorScrolling: 'enabled',            // permite scrollear a fragmentos (#id)
  scrollOffset: [0, 64]                  // opcional: para navbar fijo
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}