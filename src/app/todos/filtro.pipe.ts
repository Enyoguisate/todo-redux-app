import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo',
})
export class FiltroPipe implements PipeTransform {
  transform(todos: Todo[], filtro: string): Todo[] {
    switch (filtro) {
      case 'pendientes':
        return todos.filter((todo) => todo.completado === false);
      case 'completados':
        return todos.filter((todo) => todo.completado === true);
      default:
        return todos;
    }
  }
}
