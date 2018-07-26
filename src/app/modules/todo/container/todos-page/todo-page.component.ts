import { Component, OnInit } from '@angular/core';
import Tasks from '../../../../shared/tasks';
import {TodoService} from '../../todo.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})

export class TodoPageComponent implements OnInit {
  todos: Array<Tasks> = [];
  todoForm: FormGroup;
  submitted = false;

  constructor(public todoService: TodoService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();

    this.todoForm = this.formBuilder.group({
      name: ['', Validators.required],
      id: [''],
      finished: false,
      date: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  get f() {
    return this.todoForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.todoForm.invalid) {
      return;
    }
    this.todoService.addTodo(this.todoForm.value);
    this.todos = this.todoService.getTodos();
  }

  onDeleteMe(todo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].name === todo.name) {
        this.todos.splice(i, 1);
        break;
      }
    }
    this.todoService.setTodos(this.todos);
  }
}
