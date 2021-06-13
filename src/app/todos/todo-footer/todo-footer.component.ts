import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import AppState from 'src/app/app.reducer';
import * as actions from '../../filtro/filtro.actions';
import * as actionsRx from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  filtroActual: string = '';
  filters: string[] = ['todos', 'completados', 'pendientes'];
  cantidadCompletadas: number = 0;

  constructor(private store: Store<AppState>) {
    store.select('todos').subscribe((todos) => {
      this.cantidadCompletadas = todos.filter((todo) => todo.completado === false).length;
    })
  }

  ngOnInit(): void {
    this.store.select('filtro').subscribe((filtro) => {
      this.filtroActual = filtro;
    });
  }

  seleccionarFiltro(filtro: string) {
    this.store.dispatch(actions.setFiltro({ filtro: filtro }));
  }

  limpiarCompletados() {
    this.store.dispatch(actionsRx.limpiarCompletados());
  }
}
