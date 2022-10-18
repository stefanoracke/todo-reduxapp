import { createAction,props } from "@ngrx/store";

export const addToDo = createAction('[TODO] Adding to do',
    props<{texto:string}>()
)

export const toggleToDo = createAction('[TODO] Toggle',
    props<{id: number}>()
)

export const editToDo = createAction('[TODO] Editing',
    props<{id: number, texto:string}>()
)

export const deleteToDo = createAction('[TODO] Delete',
    props<{id: number}>()
)

export const toggleAll = createAction('[TODO] Toggle All',
    props<{completado: boolean}>()
)

export const deleteCompleted = createAction('[TODO] Delete Completed'
)