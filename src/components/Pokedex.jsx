import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import { Pokemon } from "./Pokemon";
import { Searchbar } from "./Searchbar";

const itemsPerPage = 50; // Number of Pokemon per page
const debounceTimeout = 300; // Debounce timeout in milliseconds

export const Pokedex = ({ page, pokeCard }) => {
  const [numPage, setPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [visiblePokemons, setVisiblePokemons] = useState([]);
  const observer = useRef(null);
  const searchTimeout = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}`);
        const pokemonList = response.data.results;
        const pokemonPromises = pokemonList.map((pokemon) => {
          return axios.get(pokemon.url);
        });

        const pokemonResponses = await Promise.all(pokemonPromises);
        const pokemonData = pokemonResponses.map((res) => {
          const pokemon = res.data;
          return {
            ...pokemon,
            sprites: pokemon.sprites,
          };
        });

        setPokemons(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchData();
  }, [setPokemons]);

  const fetchMorePokemons = async () => {
    try {
      const startIndex = numPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${startIndex}`);
      const pokemonList = response.data.results;
      const pokemonPromises = pokemonList.map((pokemon) => {
        return axios.get(pokemon.url);
      });

      const pokemonResponses = await Promise.all(pokemonPromises);
      const newPokemonData = pokemonResponses.map((res) => {
        const pokemon = res.data;
        return {
          ...pokemon,
          sprites: pokemon.sprites,
        };
      });

      setPokemons((prevPokemons) => [...prevPokemons, ...newPokemonData]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching more Pokémon data:", error);
    }
  };

  const handleSearch = (searchTerm) => {
    clearTimeout(searchTimeout.current);
    searchTimeout.current = setTimeout(() => {
      setSearch(searchTerm);
      setPage(1);
    }, debounceTimeout);
  };

  useEffect(() => {
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setVisiblePokemons(filteredPokemons);
  }, [pokemons, search]);

  const lastPokemonRef = useRef(null);
  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchMorePokemons();
      }
    });

    if (lastPokemonRef.current) observer.current.observe(lastPokemonRef.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [visiblePokemons, fetchMorePokemons]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex items-center justify-center">
      </div>

      <Searchbar onSearch={handleSearch} />

      <div className="container relative z-40 mx-auto mt-12">
        <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
          {visiblePokemons.map((pokemon, index) => (
            <Pokemon key={`${pokemon.name}-${index}`} pokemon={pokemon} poke={pokeCard} numPage={page} />
          ))}
          <div ref={lastPokemonRef} style={{ height: 1 }} />
        </div>
      </div>

      {visiblePokemons.length > itemsPerPage && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={handleScrollToTop}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Scroll to Top
          </button>
        </div>
      )}
    </>
  );
};
