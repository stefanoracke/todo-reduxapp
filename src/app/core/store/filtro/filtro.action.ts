import { createAction, props } from "@ngrx/store";

export enum validFilter{
    all,
    completed,
    pending
};

export const setFilter = createAction('[Filter] Set Filter',
props<{filtro:validFilter}>()
);