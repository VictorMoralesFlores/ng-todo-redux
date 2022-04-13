import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { deleteTodo, toggleTodo, updateTodo } from '../todos.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('input') txtInputEl: ElementRef;
  checkCompleted: FormControl;
  txtInput: FormControl;
  editing: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.checkCompleted = new FormControl(this.todo.completed);

    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.checkCompleted.valueChanges.subscribe( newValue => {
      this.store.dispatch(toggleTodo({ id: this.todo.id }))
    } )
  }
  edit(){
    this.editing = true;
    setTimeout(()=>{
      this.txtInputEl.nativeElement.select();
    }, 1);
  }
  saveEdition(){
    this.editing = false;
    if( this.txtInput.invalid ) return;
    this.store.dispatch(updateTodo({
      id: this.todo.id,
      text:this.txtInputEl.nativeElement.value
    }))
  }
  cancelEdition(){
    this.txtInputEl.nativeElement.value = this.todo.text;
    this.editing = false;
  }

  delete(){
    this.store.dispatch( deleteTodo({id: this.todo.id }) )
  }

}
