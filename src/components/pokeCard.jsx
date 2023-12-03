import React, { useState, useEffect } from "react";
import axios from "axios";

export const PokeCard = ({ page, pokemon, addTeamMember }) => {
  const [pokemonSpecies, setPokemonSpecies] = useState(null);
  const [shiny, setShiny] = useState(false);
  const [addedToTeam, setAddedToTeam] = useState(false);

  useEffect(() => {
    const fetchPokemonSpecies = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`
        );
        setPokemonSpecies(response.data);
      } catch (error) {
        console.error("Error fetching Pokemon species:", error);
      }
    };

    fetchPokemonSpecies();
  }, [pokemon.name]);

  const formatNumber = (number) => {
    const numberString = number.toString();
    return numberString.length > 1 ? `#${numberString}` : `#00${numberString}`;
  };

  const formatMeasures = (number) => {
    const numberString = number.toString();

    if (numberString.length > 1) {
        // Inserta el punto decimal antes del último dígito
        const formattedNumber = `#${numberString.slice(0, -1)}.${numberString.slice(-1)}`;
        return formattedNumber;
    } else {
        // Si el número es un solo dígito, agrega un cero antes del punto decimal
        return `0.${numberString}`;
    }
}

  const getFlavorText = () => {
    if (pokemonSpecies && pokemonSpecies.flavor_text_entries[8]) {
      return pokemonSpecies.flavor_text_entries[8].flavor_text;
    }
    return "No flavor text available";
  };

  const toggleShiny = () => {
    setShiny(!shiny);
  };

  const getPokemonImageUrl = (pokemonId) => {
    const baseUrl = shiny
      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonId}.png`
      : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

    return baseUrl;
  };

  const handleAddToTeam = () => {
    // Simulating adding to a team by logging the information
    console.log(`Added ${pokemon.name} to Team!`);
    setAddedToTeam(true);
    setTimeout(() => {
      setAddedToTeam(false);
    }, 2000);

    addTeamMember(pokemon)
  };

  const getWeaknesses = () => {
    // Define weaknesses based on the types (simplified)
    const weaknesses = {
      normal: ["fighting"],
      fire: ["water", "rock"],
      water: ["electric", "grass"],
      grass: ["fire", "ice", "poison", "flying"],
      electric: ["ground"],
      ice: ["fire", "fighting", "rock", "steel"],
      fighting: ["flying", "psychic", "fairy"],
      poison: ["ground", "psychic"],
      ground: ["water", "ice", "grass"],
      flying: ["electric", "ice", "rock"],
      psychic: ["bug", "dark", "ghost"],
      bug: ["fire", "flying", "rock"],
      rock: ["water", "grass", "fighting", "ground", "steel"],
      ghost: ["ghost", "dark"],
      dark: ["fighting", "bug", "fairy"],
      dragon: ["ice", "dragon", "fairy"],
      steel: ["fire", "fighting", "ground"],
      fairy: ["poison", "steel"],
    };
  
    // Extract the names of the Pokemon's types
    const pokemonTypes = pokemon.types.map((type) => type.type.name);
  
    // Initialize an array to store weaknesses
    let pokemonWeaknesses = [];
  
    // Iterate over each type of the Pokemon
    for (const type of pokemonTypes) {
      // Add weaknesses based on the type
      pokemonWeaknesses = [...pokemonWeaknesses, ...(weaknesses[type] || [])];
    }
  
    // Remove duplicates
    return [...new Set(pokemonWeaknesses)];
  };

  const renderWeaknesses = () => {
    const weaknesses = getWeaknesses();

    if (weaknesses.length === 0) return null;

    return (
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Weaknesses:</h2>
        <div className="flex space-x-3">
          {weaknesses.map((weakness, index) => (
            <div
              key={index}
              className={`text-white px-4 py-2 rounded-full ${typeColors[weakness.toLowerCase()]}`}
            >
              {weakness.charAt(0).toUpperCase() + weakness.slice(1)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderAbilities = () => {
    if (!pokemon.abilities) return null;

    return (
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Abilities:</h2>
        <div className="flex space-x-3">
          {pokemon.abilities.map((ability, index) => (
            <div
              key={index}
              className="text-white px-4 py-2 rounded-full bg-indigo-600"
            >
              {ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderWeight = () => {
    return (
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Weight:</h2>
        <p className="text-gray-700 text-lg">{formatMeasures(pokemon.weight)} kg</p>
      </div>
    );
  };

  const renderHeight = () => {
    return (
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Height:</h2>
        <p className="text-gray-700 text-lg">{formatMeasures(pokemon.height)} m</p>
      </div>
    );
  };

  const renderStats = () => {
    if (!pokemon.stats) return null;

    return (
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Stats:</h2>
        <div className="grid grid-cols-2 gap-6">
          {pokemon.stats.map((stat, index) => (
            <div key={index} className="text-gray-700">
              <p className="text-lg font-semibold mb-2">
                {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: {stat.base_stat}
              </p>
              <div className="relative h-6 bg-gray-200 rounded-full">
                <div
                  className={`absolute top-0 left-0 h-6 bg-${statColors[stat.stat.name.toLowerCase()]} rounded-full`}
                  style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderMoves = () => {
    if (!pokemon.moves) return null;

    return (
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Moves:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pokemon.moves.slice(0, 5).map((move, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 rounded-md shadow-md"
            >
              <p className="text-gray-700">{move.move.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderTypes = () => {
    if (!pokemon.types) return null;

    return (
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Types:</h2>
        <div className="flex space-x-3">
          {pokemon.types.map((type, index) => (
            <div
              key={index}
              className={`text-white px-4 py-2 rounded-full ${typeColors[type.type.name.toLowerCase()]}`}
            >
              {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="text-gray-800 body-font overflow-hidden rounded-lg shadow-md">
      <div className="container mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:mt-0 mt-6">
          <button
            onClick={() => page(3)}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mb-4"
          >
            Back
          </button>
          <div className="lg:w-2/3 w-full lg:h-auto h-64 rounded-lg overflow-hidden mx-auto">
            <img
              alt={pokemon.name}
              className="w-full h-full object-cover object-center transform hover:scale-105 duration-300"
              src={getPokemonImageUrl(pokemon.id)}
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={toggleShiny}
              className={`mr-2 rounded-full px-4 py-2 ${
                shiny ? "bg-yellow-400" : "bg-gray-400"
              } text-white`}
            >
              Shiny
            </button>
            <button
              onClick={handleAddToTeam}
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Add Pokemon
            </button>
            {addedToTeam && (
              <div className="ml-4 text-green-500">
                Added Pokemon to Team
              </div>
            )}
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6">
          <h2 className="text-3xl font-bold mb-1 capitalize">
            #{pokemon.name}
          </h2>
          <h3 className="w-1/2 mb-4">{formatNumber(pokemon.id)}</h3>
          <p className="leading-relaxed mb-6 text-lg">{getFlavorText()}</p>
          {renderTypes()}
          {renderWeaknesses()}
          <div className="flex space-x-6">
            <div className="w-1/2">{renderWeight()}</div>
            <div className="w-1/2">{renderHeight()}</div>
          </div>
          {renderAbilities()}
        </div>
        <div className="lg:w-full w-full mt-6">
          {renderStats()}
          {renderMoves()}
        </div>
      </div>
    </section>
  );
};

const typeColors = {
  normal: "bg-gray-400",
  fire: "bg-red-600",
  water: "bg-blue-600",
  grass: "bg-green-600",
  electric: "bg-yellow-600",
  ice: "bg-blue-300",
  fighting: "bg-red-800",
  poison: "bg-purple-600",
  ground: "bg-yellow-800",
  flying: "bg-blue-400",
  psychic: "bg-purple-800",
  bug: "bg-green-400",
  rock: "bg-yellow-900",
  ghost: "bg-indigo-600",
  dark: "bg-gray-800",
  dragon: "bg-indigo-800",
  steel: "bg-gray-500",
  fairy: "bg-pink-600",
};

const statColors = {
  hp: "green-500",
  attack: "red-500",
  defense: "blue-500",
  "special-attack": "yellow-500",
  "special-defense": "indigo-500",
  speed: "pink-500",
};

typeColors["pokemon-type"] = "rounded-full w-6 h-6 border-2 border-gray-300";

export default PokeCard;
