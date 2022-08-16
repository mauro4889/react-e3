import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../../components/Navbar/Navbar'
import HomeStyled from './StyleHome'

export const Home = () => {

  const state = useSelector((state)=> state.todoReducer)

  const [pendientes, setPendientes] = useState('');


  useEffect(()=>{
    setPendientes(state);
  })

  return (
    <HomeStyled>
        <h1>Inicio de la pagina</h1>
        <div className="containerLink">
          <a href="/todolist" style={
            {color: pendientes.length ? 'red' : 'black', fontWeight: pendientes.length ? 'bolder' : 'bold', fontSize: pendientes.length ? '25px' : '20px'}
            }>To do List</a>
          <a href="/pokeapi">PokeAPI</a>
        </div>        
    </HomeStyled>    
  )
}
