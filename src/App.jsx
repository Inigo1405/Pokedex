import React, { useState, useEffect } from "react";

import { Header } from './components/navbar'
import { Login } from './components/auth/login'
import { Sign } from './components/auth/registrarse'
import {AuthDetails} from './components/AuthDetails'

import { Pokedex } from './components/Pokedex';


function App() {
  const [pageSelected, setPage] = useState('')

  const selectPage = (page) => {
    setPage(page)
  }

  return (
    <>
      <Header page={selectPage} />

      <div className="w-100vw h-vh bg-slate-950">
        {
          pageSelected == 1 ? <Login/> : <Sign/>
          
        }
        <AuthDetails/>
      </div>
      {/* <Pokedex/> */}

    </>
  )
}

export default App

