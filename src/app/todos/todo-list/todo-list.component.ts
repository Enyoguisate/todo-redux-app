import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import AppState from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: Todo[] = [];
  filtroActual: string = "todos";

  constructor(private store: Store<AppState>) {
    store.subscribe(({todos, filtro}) => {
      this.todos = todos;
      this.filtroActual = filtro;
    });
  }
}
