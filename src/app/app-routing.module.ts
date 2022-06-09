import { NovaPaginaComponent } from './nova-pagina/nova-pagina.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pagina',
    component: NovaPaginaComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

export class AppRoutingModule {
  static routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(
    APP_ROUTES
  );
}
