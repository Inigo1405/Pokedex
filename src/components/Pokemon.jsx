import React from "react";

export const Pokemon = ({pokemon}) => {
  // console.log(pokemon)

  return ( 
    <>
      <a href="#" className="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
                <img src={pokemon.sprites.front_default} className="block mx-auto" />

                <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                  {pokemon.name}
                </p>
            </div>
      </a>
    </>
  )
}