import React, { useState, useEffect } from "react";

import { Header } from './components/navbar'
import { Login } from './components/auth/login'
import { Sign } from './components/auth/registrarse'
import {AuthDetails} from './components/AuthDetails'

import { Pokedex } from './components/Pokedex';


function App() {
  const [pageSelected, setPage] = useState(0)

  const changePage = () => {
    switch (pageSelected) {
      case 0: 
        return <Pokedex/>
      case 1:
        return <Login/>
      case 2:
        return <Sign/>
    }
    
  }

  return (
    <>
      <Header page={setPage} />

      <AuthDetails/>
      <div className="w-100vw h-vh">
        {changePage()}
      </div>

    </>
  )
}

export default App

