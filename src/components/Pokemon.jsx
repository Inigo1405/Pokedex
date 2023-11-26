import React from "react";

export const Pokemon = ({pokemon}) => {
  // console.log(pokemon)

  return ( 
    <>
      <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/3">
            <div>
                <img src={pokemon.sprites.front_default} class="block mx-auto" />

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                  {pokemon.name}
                </p>
            </div>
      </a>
    </>
  )
}