import { Routes } from '@angular/router';
import { DemoConsoleLogComponent } from './components/demo-console-log/demo-console-log.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/demo-console-log/demo-console-log.component').then(m => m.DemoConsoleLogComponent)
  },
  {
    path: 'demo-componentes-reutilizables',
    loadComponent: () => import('./components/demo-componentes-reutilizables/demo-componentes-reutilizables.component').then(m => m.DemoComponentesReutilizablesComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
