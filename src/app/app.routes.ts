import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'support',
    loadComponent: () =>
      import('./features/support/support.component').then(m => m.SupportComponent),
  },
];