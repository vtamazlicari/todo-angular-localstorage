import { Injectable } from '@angular/core';
import Tasks from '../../shared/tasks';

@Injectable()
export class TodoService {

  todos: Array<Tasks> = [];

  constructor() {
    const data = JSON.parse(localStorage.getItem('TASK'));
    if (data) {
      this.todos = data;
    }
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('TASK', JSON.stringify(this.todos));
    console.log(this.todos);
  }

  getTodo(name) {
   // console.log(name);
    //console.log(this.todos );
    const todo = this.todos.find(result => result.name === name);
   // console.log(todo);
    return todo;
  }

  setTodoFinished(todo) {
    for (let i in this.todos) {
      if (this.todos[i].name === todo.name) {
        this.todos[i].finished = todo.finished;
        localStorage.removeItem('TASK');
        localStorage.setItem('TASK', JSON.stringify(this.todos));
        break;
      }
    }
  }
  setTodos(todo) {
    this.todos = todo;
    localStorage.removeItem('TASK');
    localStorage.setItem('TASK', JSON.stringify(this.todos));
  }

}
