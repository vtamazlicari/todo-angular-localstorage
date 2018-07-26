import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoPageComponent} from './container/todos-page/todo-page.component';

const routes: Routes = [
  {
    path: '',
    component: TodoPageComponent
  }
];

export const todoRoutes: ModuleWithProviders = RouterModule.forChild(routes);
