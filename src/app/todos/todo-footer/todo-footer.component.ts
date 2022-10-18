import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { setFilter, validFilter } from 'src/app/core/store/filtro/filtro.action';
import { deleteCompleted } from 'src/app/core/store/todos/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  filtros = [
    { name: 'All', value: validFilter.all },
    { name: 'Completed', value: validFilter.completed },
    { name: 'Pending', value: validFilter.pending },
  ];
  filtroActual: validFilter = validFilter.all;

  pending = 0;

  ngOnInit(): void {
    // this.store.select('filter').subscribe((res) => (this.filtroActual = res));
    // this.store.select('todos').subscribe((res) => (console.log(res)));
    this.store.subscribe(state=>{
      this.filtroActual=state.filter;
      this.pending = state.todos.filter(todo =>!todo.completado).length
    })

  }

  clear(){
    this.store.dispatch(deleteCompleted())
  }

  changeFilter(n:validFilter){
    this.store.dispatch(setFilter({filtro:n}))
  }
}
