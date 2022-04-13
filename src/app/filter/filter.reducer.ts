import { createReducer, on } from '@ngrx/store';
import { filter, validFilters } from './filter.actions';

const initialState: validFilters = 'all';
export const filterReducer = createReducer(
  initialState,
  on(filter, (state, {filter})=> filter)
);
