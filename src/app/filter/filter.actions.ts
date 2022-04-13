import { createAction, props } from '@ngrx/store';

export type validFilters = 'all' | 'completed' | 'pending';

export const filter = createAction('[Filter] Set filter', props<{filter: validFilters}>());
