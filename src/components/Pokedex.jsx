import React, { useState, useEffect } from "react";
import axios from "axios";

import { Pokemon } from "./Pokemon";

export const Pokedex = ({page, pokeCard}) => {
    const [numPage, setPage] = useState(1)
    const [pokemons, setPokemons] = useState([])
    const [search, setSearch] = useState('')

    const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(numPage-1)*20}`

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
    }, [setPokemons, numPage])

    // console.log(x)

    return(
        // <!-- source: https://redpixelthemes.com/ -->
        <>
            <h2 className="text-center font-bold text-lg">Page {numPage}</h2>
            <div className="flex items-center justify-center">
                {numPage != 1 && <button onClick={() => {setPage(numPage-1)}} className="bg-black hover:bg-gray-700 text-white py-2 px-8 border rounded-full">Prev</button>}
                <button onClick={() => {setPage(numPage+1)}} className="bg-black hover:bg-gray-700 text-white py-2 px-8 border rounded-full">Next</button>
            </div>
            
            <div className="flex items-center justify-center mt-2">
                <input onChange={(e) => {setSearch(e.target.value)}} type="text" placeholder="Search pokemon..." className="appearance-none border-2 pl-10 w-1/4 border-gray-600 hover:border-gray-700 transition-colors rounded-md py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"  />
            </div>
            
            <div className="container relative z-40 mx-auto mt-12">
                <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
                {
                    pokemons.map((pokemon) => {
                        return <Pokemon key={pokemon.name} pokemon={pokemon} poke={pokeCard} numPage={page}/>
                    })
                }
                </div>
            </div>
        </>
    )
}