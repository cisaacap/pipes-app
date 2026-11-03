import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Pipes Básicos',
    loadComponent: () => import('./pages/basic-pages/basic-pages')
  },
  {
    path: 'number',
    title: 'Numbers Pipes',
    loadComponent: () => import('./pages/numbers-page/numbers-page')
  },
  {
    path: 'uncommon',
    title: 'Uncommon Pipes',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page')
  },
  {
    path: 'custom',
    title: 'Pipes Customized',
    loadComponent: () => import('./pages/custom-page/custom-page')
  },
  {
    path: '**',
    redirectTo: 'basic'
  }
];
