import React from "react";

export const Pokemon = ({pokemon}) => {
  // console.log(pokemon)

  return ( 
    <>
      <hr />
      <h3>{pokemon.name} #{pokemon.id}</h3>
      <img src={pokemon.sprites.front_default} alt="" />
      <img src={pokemon.sprites.front_shiny} alt="" />
      <br />
      <p>Moves: </p>
      <select name="moves" id="1">
      {
        pokemon.moves.map(pokemon => {
          return <option key={pokemon.id}>{pokemon.move.name}</option>

        })
      }
      </select>
    </>
  )
}