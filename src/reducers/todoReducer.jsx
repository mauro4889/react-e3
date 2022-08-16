import { AGREGAR, BORRAR } from "../types/types"




const initialState = []

export function todoReducer(state = initialState, action){
    switch (action.type){
        case AGREGAR:
            return   [...state, action.payload]
        case BORRAR:
            return initialState
        default:
            return state
    }
}
