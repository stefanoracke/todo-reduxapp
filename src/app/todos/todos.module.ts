import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoaddComponent } from './todoadd/todoadd.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from '../core/pipes/filter-pipe.pipe';


@NgModule({
  declarations: [
    TodoaddComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPageComponent,
    FilterPipePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    TodoPageComponent
  ]
})
export class TodosModule { }
