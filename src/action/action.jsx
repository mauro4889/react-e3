import { AGREGAR, BORRAR } from "../types/types";



export const actionAgregar = text =>{
    return {
        type: AGREGAR, 
        payload: text
    }
}

export const actionBorrar = () =>{
    return {type: BORRAR}
}

