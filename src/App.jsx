import { useState, useEffect } from 'react'
import { Header } from './components/navbar'
import axios from "axios";

import { Pokedex } from './components/Pokedex';


function App() {
  const [page, setPage] = useState(1)
  const [pokemons, setPokemons] = useState([])

  const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page-1)*20}`

  // Consume la pokeAPI
  useEffect(() => {
    axios.get(url).then((response) => {
      const pokemonList = response.data.results
      const pokemonPromises = pokemonList.map(pokemon => {
        return axios.get(pokemon.url)
      })

      Promise.all(pokemonPromises).then(pokemonResponses => {
        const pokemonData = pokemonResponses.map(res => {
          const pokemon = res.data 
          return {
            ...pokemon,
            sprites: pokemon.sprites
          }
        })
        setPokemons(pokemonData)
      })
    })
  }, [setPokemons, page])

  
  return (
    <>
      <Header/>
      <Pokedex pokeArr={pokemons}/>
    </>
  )
}

export default App

