import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


import { AppState } from 'src/app/core/store/app.state';
import { Todo } from '../models/todo.models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[]=[];

  stateFilter!:any

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    

    this.store.subscribe(state=>{
      this.stateFilter=state.filter
      this.todos = state.todos
    })
  }

}
