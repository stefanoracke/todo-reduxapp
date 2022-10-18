import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/todos/models/todo.models';
import { addToDo, deleteCompleted, deleteToDo, editToDo, toggleAll, toggleToDo } from './todo.actions';

export const initialState:Todo[] = [];

export const _toDoReducer = createReducer(
  initialState,
  on(addToDo, (state, {texto}) => [...state, new Todo(texto)]),

  on(deleteToDo, (state, {id}) => state.filter( todo => todo.id !== id)),

  on(toggleAll, (state, {completado}) => state.map(todo =>{return {...todo, completado: completado}})),

  on(deleteCompleted, (state)=> state.filter(todo=> todo.completado == false)),

  on(toggleToDo, (state, {id}) => {
    return state.map(todo =>{
      if(todo.id === id){
        return {
          ...todo,
          completado :!todo.completado
        }
      }
      else{
        return todo;
      }
    })
  }),
  on(editToDo, (state, {id, texto}) => {
    return state.map(todo =>{
      if(todo.id === id){
        return {
          ...todo,
          texto :texto
        }
      }
      else{
        return todo;
      }
    })
  }),
);