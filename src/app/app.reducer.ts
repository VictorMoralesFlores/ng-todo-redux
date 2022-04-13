import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./modules/todos/models/todo.model";
import { todoReducer } from "./modules/todos/todo.reducer";
import { filterReducer } from './filter/filter.reducer';
import { validFilters } from './filter/filter.actions';

export interface AppState {
  todos: Todo[],
  filter: validFilters
}


export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}
