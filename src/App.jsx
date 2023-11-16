import './App.css'
import reactLogo from './assets/react.svg'
import pokebola from './assets/pokebola.png'
import { Pokedex } from './components/Pokedex'

function App() {

  return (
    <>
      <div>
        <a href="https://pokeapi.co/" target="_blank">
          <img src={pokebola} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Pokemon + React</h1>
      <div className="card">
        <Pokedex/>
      </div>
    </>
  )
}

export default App
