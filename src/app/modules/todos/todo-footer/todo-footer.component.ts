import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import * as actions from '../../../filter/filter.actions';
import { clearCompleted } from '../todos.action';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: actions.validFilters;
  filters: actions.validFilters[] = ['all', 'completed', 'pending'];
  pendingTasks = 0;

  constructor(private store: Store<AppState>) {
    // this.store.select('filter').subscribe( filter =>{
    //   this.currentFilter = filter;
    // } );

    this.store.subscribe( state => {
      this.currentFilter = state.filter;
      this.pendingTasks = state.todos.filter( todo => !todo.completed).length;
    } );
   }

  ngOnInit(): void {
  }

  changeFilter(newFilter: actions.validFilters){
    if( this.currentFilter === newFilter ) return;
    this.store.dispatch(actions.filter({filter: newFilter}))
  }

  clearCompleted(){
    this.store.dispatch(clearCompleted());
  }

}
