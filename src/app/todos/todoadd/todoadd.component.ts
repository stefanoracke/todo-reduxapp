import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from './../../core/store/app.state';
import { addToDo } from './../../core/store/todos/todo.actions';

@Component({
  selector: 'app-todoadd',
  templateUrl: './todoadd.component.html',
  styleUrls: ['./todoadd.component.scss']
})
export class TodoaddComponent implements OnInit {

  txtInput !: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required)
   }

  ngOnInit(): void {
  }

  addToDO(){
    if(this.txtInput.invalid) return;

    this.store.dispatch(addToDo({texto: this.txtInput.value}));
    this.txtInput.reset();
  }

}
