import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import { createTodo, toggleTodo, updateTodo, deleteTodo, toggleAll, clearCompleted } from './todos.action';
import { filter } from '../../filter/filter.actions';

const initialState: Todo[] = [
  new Todo('Salvar a Tony'),
  new Todo('Conquistar al mundo'),
  new Todo('Robar las gemas'),
  new Todo('Comprar un carro'),
  new Todo('Leer el libro'),
  new Todo('Comprar las galletas'),
];
export const todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { text }) => [...state, new Todo(text)]),
  on(toggleTodo, (state, { id }) => {
    console.log(state)
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else return todo;
    });
  }),
  on(updateTodo, (state, { id, text }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text
        }
      } else return todo;
    });
  }),
  on(deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(toggleAll, (state, { completed }) => {
    return state.map(todo => {
      return {
        ...todo,
        completed
      };
    });
  }),
  on( clearCompleted, (state) => {
    return state.filter( todo => !todo.completed );
  } )
)
