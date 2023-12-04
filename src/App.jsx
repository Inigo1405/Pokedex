import React, { useState } from "react";

import { Header } from './components/navbar'
import { Login } from './components/auth/login'
import { Sign } from './components/auth/registrarse'
import {AuthDetails} from './components/AuthDetails'
import { Landing } from "./components/landing";

import { Pokedex } from './components/Pokedex';
import { PokeCard } from "./components/pokeCard";

import { Teams } from "./components/teams";


function App() {
  
  const [user, setUser] = useState()
  
  const [pageSelected, setPage] = useState(0)
  const [poke, setPokeCard] = useState()
  
  const [team, setTeam] = useState([]);


  const addToTeam = (e) => {
    setTeam([...team, e]); 
    console.log(team); 
  }


  const changePage = () => {
    switch (pageSelected) {
      case 0: 
        return <Landing page={setPage}/>
      case 1:
        return <Login page={setPage} userID={setUser}/>
      case 2:
        return <Sign page={setPage} userID={setUser}/>
      case 3:
        return <Pokedex page={setPage} pokeCard={setPokeCard} />
      case 4:
        return <PokeCard page={setPage} pokemon={poke} addTeamMember={addToTeam} />
      case 5:
        if (user){
          return <Teams team={team} user={user}/>
        }
        else{
          return <Sign userID={setUser}/>
        }
    }
  }

  
  return (
    <>
      <Header page={setPage} />

      <AuthDetails user={setUser}/>
      <div>
        {changePage()}
      </div>
    </>
  )
}

export default App

