import { Component, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { toggleAll } from 'src/app/core/store/todos/todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  completado=false;
  constructor(private store: Store<AppState>) { }

  toggleAll(){
    this.completado=!this.completado
    this.store.dispatch(toggleAll({completado: this.completado}))
  }

  ngOnInit(): void {
  }

}
