import React from 'react'

export const PokeCard = ({page, pokemon}) => {
    console.log(pokemon)

    return (
        <>
            <button onClick={() => page(3)} className="bg-black hover:bg-gray-700 text-white py-2 px-8 border rounded-full">Back</button>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className='items-center mb-8 w-80'/>
        </>
    )
}
