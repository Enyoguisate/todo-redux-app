import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import AppState from '../../app.reducer';
import * as actions from '../todo.actions';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  chkToggleAll: FormControl = new FormControl();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkToggleAll = new FormControl(false);
  }

  toggleAll() {
    this.store.dispatch(actions.toggleAll({isActive: this.chkToggleAll.value}))
  }

}
