import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'contact',
    loadChildren: './modules/contact/contact.module#ContactModule'
  }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);

