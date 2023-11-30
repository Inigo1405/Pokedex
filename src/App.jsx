import React, { useState, useEffect } from "react";

import { Header } from './components/navbar'
import { Login } from './components/auth/login'
import { Sign } from './components/auth/registrarse'
import {AuthDetails} from './components/AuthDetails'
import { Landing } from "./components/landing";

import { Pokedex } from './components/Pokedex';
import { PokeCard } from "./components/pokeCard";

import { Teams } from "./components/teams";


function App() {
  const [pageSelected, setPage] = useState(0)
  const [poke, setPokeCard] = useState()
  const [teamSelected, setTeamSelected] = useState([]);

  const changePage = () => {
    switch (pageSelected) {
      case 0: 
        return <Landing page={setPage}/>
      case 1:
        return <Login/>
      case 2:
        return <Sign/>
      case 3:
        return <Pokedex page={setPage} pokeCard={setPokeCard} />
      case 4:
        return <PokeCard page={setPage} pokemon={poke} addTeamMember={setTeamSelected} />
      case 5:
        return <Teams x={teamSelected}/>
    }
  }

  
  return (
    <>
      <Header page={setPage} />

      <AuthDetails/>
      <div>
        {changePage()}
      </div>
    </>
  )
}

export default App

