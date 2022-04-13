import { createAction, props } from "@ngrx/store";

export const createTodo = createAction('[Todo] Create', props<{text:string}>());
export const updateTodo = createAction('[Todo] Update', props<{id: string, text: string}>());

export const toggleTodo = createAction('[Todo] Toggle', props<{id: string}>());

export const deleteTodo = createAction('[Todo] Delete', props<{id: string}>());

export const toggleAll = createAction('[Todo] Toggle All', props<{completed: boolean}>());

export const clearCompleted = createAction('[Todo] Clear completed');
