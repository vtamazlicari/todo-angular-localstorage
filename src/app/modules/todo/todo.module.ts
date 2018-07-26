import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './container/todos-page/todo-page.component';
import {todoRoutes} from './todo.routes';
import {TodoService} from './todo.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    todoRoutes,
    ReactiveFormsModule
  ],
  exports: [TodoPageComponent],
  declarations: [TodoPageComponent],
  providers: [TodoService]
})
export class TodoModule { }
