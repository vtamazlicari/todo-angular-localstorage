import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../../modules/todo/todo.service';
import {ActivatedRoute} from '@angular/router';
import Tasks from '../../../shared/tasks';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  name: any;
  todosSelect: Tasks;
  constructor(private todoService: TodoService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.todosSelect = params.name)
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.todosSelect = this.todoService.getTodo(this.name);
      console.log( this.todosSelect);
    });
  }

  onClickMe() {
    this.todosSelect.finished = true;
    this.todoService.setTodoFinished(this.todosSelect);
    console.log(this.todoService.getTodo(this.name));
  }

}
