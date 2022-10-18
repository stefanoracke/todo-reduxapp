import { createReducer, on } from "@ngrx/store";
import { setFilter, validFilter } from "./filtro.action";

export const initialState:validFilter =0;


export const filterReducer = createReducer(
    initialState,
    on(setFilter, (state, {filtro}) =>  filtro ),
)