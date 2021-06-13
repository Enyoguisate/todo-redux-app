import { createReducer, on, Action } from '@ngrx/store';
import { setFiltro } from './filtro.actions';

export const initialState: string = 'todos';

const _filtroReducer = createReducer(
  initialState,
  on(setFiltro, (state, { filtro }) => filtro)
);

export function filtroReducer(state: any, action: Action) {
  return _filtroReducer(state, action);
}
