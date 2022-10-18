import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/todos/models/todo.models';
import { validFilter } from '../store/filtro/filtro.action';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipePipe implements PipeTransform {

  transform(toDo: Todo[], filter:number): Todo[] {
    
    switch (filter){      
      case 1:
        return toDo.filter( todo=> todo.completado);
      case 2:
        return toDo.filter( todo => !todo.completado )
      default:
        return toDo
    } 


   
  }

}
