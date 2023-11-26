import React from 'react'

export const PokeCard = ({page, pokemon}) => {
    // console.log(pokemon)

    return (
        <>
            <button onClick={() => page(3)} className="bg-black hover:bg-gray-700 text-white py-2 px-8 border rounded-full">Back</button>
            <p>{pokemon.name}</p>
        </>
    )
}
