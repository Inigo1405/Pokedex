// Pokemon.jsx

import React, { useState } from "react";

export const Pokemon = ({ pokemon, poke, numPage }) => {
  const [hovered, setHovered] = useState(false);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const formatNumber = (number) => {
    return `#${number.toString().padStart(4, "0")}`;
  };

  // Get the primary type of the Pokemon
  const primaryType = pokemon.types[0].type.name;

  // Define background color based on Pokemon type
  const typeColors = {
    normal: "bg-gray-100",
    fire: "bg-red-100",
    water: "bg-blue-100",
    grass: "bg-green-100",
    electric: "bg-yellow-100",
    ice: "bg-blue-50",
    fighting: "bg-red-200",
    poison: "bg-purple-100",
    ground: "bg-yellow-200",
    flying: "bg-blue-200",
    psychic: "bg-purple-200",
    bug: "bg-green-200",
    rock: "bg-yellow-300",
    ghost: "bg-indigo-200",
    dark: "bg-gray-200",
    dragon: "bg-indigo-300",
    steel: "bg-gray-300",
    fairy: "bg-pink-100",
  };

  const handleClick = () => {
    poke(pokemon);
    numPage(4);
  };

  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg m-4 transform transition-transform hover:scale-105 ${typeColors[primaryType]}`}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: hovered ? "pointer" : "default" }}
    >
      <img className="w-full h-48 object-cover" src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div className="px-6 py-4">
        <p className="text-gray-500 text-sm mb-2">{formatNumber(pokemon.id)}</p>
        <div className="font-bold text-xl mb-2">{capitalizeFirstLetter(pokemon.name)}</div>
        <p className="text-gray-700 text-base">
          {pokemon.types.map((type) => capitalizeFirstLetter(type.type.name)).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default Pokemon;
