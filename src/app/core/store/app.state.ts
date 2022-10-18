import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "src/app/todos/models/todo.models";
import { validFilter } from "./filtro/filtro.action";
import { filterReducer } from "./filtro/filtro.reducer";
import { _toDoReducer } from "./todos/todo.reducer";

export interface AppState{
    todos: Todo[],
    filter: validFilter
}


export const appReducers: ActionReducerMap<AppState>={
    todos: _toDoReducer,
    filter: filterReducer
}