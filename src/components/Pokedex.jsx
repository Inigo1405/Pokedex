import React, { useState, useEffect } from "react";
import axios from "axios";

import { Pokemon } from "./Pokemon";
import { Searchbar } from "./Searchbar";

export const Pokedex = ({ page, pokeCard }) => {
  const [numPage, setPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(numPage - 1) * 20}`;

  // Consume the pokeAPI
  useEffect(() => {
    axios.get(url).then((response) => {
      const pokemonList = response.data.results;
      const pokemonPromises = pokemonList.map((pokemon) => {
        return axios.get(pokemon.url);
      });

      Promise.all(pokemonPromises).then((pokemonResponses) => {
        const pokemonData = pokemonResponses.map((res) => {
          const pokemon = res.data;
          return {
            ...pokemon,
            sprites: pokemon.sprites,
          };
        });
        setPokemons(pokemonData);
      });
    });
  }, [setPokemons, numPage, search]); // Include search in the dependencies

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h2 className="text-center font-bold text-lg">Page {numPage}</h2>
      <div className="flex items-center justify-center">
        {numPage !== 1 && (
          <button
            onClick={() => {
              setPage(numPage - 1);
            }}
            className="bg-black hover:bg-gray-700 text-white py-2 px-8 border rounded-full"
          >
            Prev
          </button>
        )}
        <button
          onClick={() => {
            setPage(numPage + 1);
          }}
          className="bg-black hover:bg-gray-700 text-white py-2 px-8 border rounded-full"
        >
          Next
        </button>
      </div>

      <Searchbar onSearch={handleSearch} />

      <div className="container relative z-40 mx-auto mt-12">
        <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
          {filteredPokemons.map((pokemon) => (
            <Pokemon key={pokemon.name} pokemon={pokemon} poke={pokeCard} numPage={page} />
          ))}
        </div>
      </div>
    </>
  );
};
