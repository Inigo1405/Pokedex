import React, { useState, useEffect } from "react";
import axios from "axios";

import { Pokemon } from "./Pokemon";

export const Pokedex = () => {
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



    return(
        // <!-- source: https://redpixelthemes.com/ -->
        <>
            <div class="container relative z-40 mx-auto mt-12">
                <div class="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
                {
                    pokemons.map((pokemon) => {
                        return <Pokemon key={pokemon.name} pokemon={pokemon}/>
                    })
                }
                </div>
            </div>
        </>
    )
}