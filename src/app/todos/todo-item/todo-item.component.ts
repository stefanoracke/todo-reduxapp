import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {Store} from '@ngrx/store'

import { AppState } from 'src/app/core/store/app.state';
import { deleteToDo, editToDo, toggleToDo } from 'src/app/core/store/todos/todo.actions';
import { Todo } from '../models/todo.models';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  chkCompleted!:FormControl;
  txtInput!:FormControl;
  editing: boolean = false


  @Input() todo!: Todo
  @ViewChild('Input') txtInputFisico!: ElementRef

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompleted.valueChanges.subscribe(res =>{
      this.store.dispatch(toggleToDo({id:this.todo.id}));
    })
  }

  edit(){
    this.editing = true
    this.txtInput.setValue(this.todo.texto)
    setTimeout(()=>{
      this.txtInputFisico.nativeElement.select();
    },1)
  }

  delete(){
    this.store.dispatch(deleteToDo({id:this.todo.id}))
  }

  finishEditing(){
    this.editing=false;
    if(this.txtInput.invalid) return;
    if(this.txtInput.value=== this.todo.texto) return;
    this.store.dispatch( editToDo({id:this.todo.id, texto: this.txtInput.value}))
  }

}
