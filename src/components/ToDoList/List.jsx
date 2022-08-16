import React from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { BORRAR } from '../../types/types';


const ButtonStyled = styled.button`
    background-color: #0B5ED7;
    border-radius: 5px;
	color: white;
	height: 25px;
    border: none;
	margin-top: 2%;
	cursor: pointer;
	@media (min-width: 767px){
		margin-bottom: 5%;
	}
`

const ListStyled = styled.div`
	margin: auto;
	padding-bottom: 1%;
	margin-top: 0;
`

export const List = () => {

	const state = useSelector((state)=> state.todoReducer)
	const dispatch = useDispatch()

	const tarea = state.map(item=>{
		return <h3 key={item[item]}>{item}</h3>
	})

  return (
	<ListStyled>
		{tarea}
		<ButtonStyled onClick={()=>dispatch({type:BORRAR})}>Borrar</ButtonStyled>
	</ListStyled>	
  )
}
