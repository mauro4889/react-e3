import React, { useState } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { AGREGAR } from '../../types/types';

const ButtonStyled = styled.button`
    background-color: #0B5ED7;
    color: white;
    height: 25px;
    width: 25%;
    margin: auto;
    margin-top: 2%;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    @media (min-width: 767px){
        margin-top: 5%;
    }
`

const FormStyled = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const InputStyled = styled.input`
    width: 80%;
    margin: auto;
    border-radius: 5px;
`


export const FormTodo = () => {

    const state = useSelector((state)=> state.todoReducer)/* NO MUESTRA EL STATE Y NO SE ACTUALIZA EL VALOR */

    const [texto, setTexto] = useState("")
    const [tarea, setTarea] = useState([])
  
  
    const dispatch = useDispatch()
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      dispatch({type: AGREGAR, payload: tarea})
      setTarea([])
      setTexto("")
    }
    

	return (
        <FormStyled onSubmit={handleSubmit}>
            <h2>Ingrese tarea</h2>
            <InputStyled type="text"
            className='inputForm'
            onChange={(e)=>{setTexto(e.target.value)}} value={texto}/>
            <ButtonStyled className='btnAgregar'
            disabled={!texto} onClick={()=>{setTarea(texto)}}>
                Agregar
            </ButtonStyled>
        </FormStyled>
    );
}
