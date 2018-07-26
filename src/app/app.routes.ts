import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactPageComponent} from './modules/contact/containers/contact-page/contact-page.component';
import {TodoPageComponent} from './modules/todo/container/todos-page/todo-page.component';
import {AboutPageComponent} from './modules/about/containers/about-page/about-page.component';
import {DetailsComponent} from './core/components/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: TodoPageComponent,
  },
  {
    path: 'todo',
    component: TodoPageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent
    //loadChildren: './modules/contact/contact.module#ContactModule'
  },
  {
    path: 'details/:name',
    component: DetailsComponent
  }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);

