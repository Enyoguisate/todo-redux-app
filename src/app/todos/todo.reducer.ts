import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Saalvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar Traje de iron man'),
  new Todo('Robar escudo del capitan america'),
];

const _todoReducer = createReducer(
  initialState,
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto,
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.borrar, (state, { id }) => {
    return state.filter((todo) => todo.id !== id);
  }),
  on(actions.toggleAll, (state, { isActive }) => {
    return state.map((todo) => {
      return { ...todo, completado: isActive };
    });
  }),
  on(actions.limpiarCompletados, (state) => {
    return state.filter((todo) => todo.completado !== true)
  })
);

export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}
