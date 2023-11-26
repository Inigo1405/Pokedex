import React, { useState, useEffect } from "react";

import { Header } from './components/navbar'
import { Login } from './components/auth/login'
import { Sign } from './components/auth/registrarse'
import {AuthDetails} from './components/AuthDetails'
import { Landing } from "./components/landing";

import { Pokedex } from './components/Pokedex';


function App() {
  const [pageSelected, setPage] = useState(0)

  const changePage = () => {
    switch (pageSelected) {
      case 0: 
        return <Landing page={setPage}/>
      case 1:
        return <Login/>
      case 2:
        return <Sign/>
      case 3:
        return <Pokedex/>
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

