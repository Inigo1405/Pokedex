import { Header } from './components/navbar'
import { Login } from './components/auth/login'
import { Sign } from './components/auth/registrarse'
import {AuthDetails} from './components/AuthDetails'

import { Pokedex } from './components/Pokedex';


function App() {
  return (
    <>
      <Header/>
      <div className="w-100vw h-vh bg-slate-950">
        <Login/>
        <Sign/>
        <AuthDetails/>
      </div>
      <Pokedex/>

    </>
  )
}

export default App

