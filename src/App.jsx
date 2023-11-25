import { useState, useEffect } from 'react'
import { Header } from './components/navbar'
import axios from "axios";


function App() {
  const [page, setPage] = useState(1)

  const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page-1)*20}`

  // Consume la API de pokemon
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
    </>
  )
}

export default App

