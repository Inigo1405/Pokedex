import React, { useState, useEffect } from "react";
import axios from "axios";

export const PokeCard = ({page, pokemon}) => {
    const [pokemons, setPokemons] = useState([])

    const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`

    

    // console.log(pokemons.flavor_text_entries[8].flavor_text)

    
    const formatNumber = (number) => {
        const numberString = number.toString();

        if (numberString.length > 1) {
            // Inserta el punto decimal antes del último dígito
            const formattedNumber = `${numberString.slice(0, -1)}.${numberString.slice(-1)}`;
            return formattedNumber;
        } else {
            // Si el número es un solo dígito, agrega un cero antes del punto decimal
            return `0.${numberString}`;
        }
    }

    // https://pokeapi.co/api/v2/pokemon-species/#
    // 8

    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-3 py-4 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt={pokemon.name} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={pokemon.sprites.front_default} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <button onClick={() => page(3)} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Back</button>
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">#{pokemon.id}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{pokemon.name}</h1>
                            <p className="leading-relaxed mb-4">pokemons.flavor_text_entries[8].flavor_text</p>
                            {/* <p className="leading-relaxed mb-4">{pokemons.flavor_text_entries[8].flavor_text}</p> */}
                            
                            <div className="bg-gray-600 rounded-full w-full h-16 text-white font-semibold flex items-center justify-center mb-4">
                                <div className="flex gap-3 items-center">
                                    <span className="text-xl">Height</span>
                                    <div className="bg-white rounded-full w-40 h-10 text-black font-semibold flex items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <span className="text-xl">{formatNumber(pokemon.height)}</span>
                                        </div>
                                    </div>
                                    <span className="text-xl">m</span>
                                </div>
                            </div>

                            <div className="bg-gray-600 rounded-full w-full h-16 text-white font-semibold flex items-center justify-center mb-4">
                                <div className="flex gap-3 items-center">
                                    <span className="text-xl">Weight</span>
                                    <div className="bg-white rounded-full w-40 h-10 text-black font-semibold flex items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <span className="text-xl">{formatNumber(pokemon.weight)}</span>
                                        </div>
                                    </div>
                                    <span className="text-xl">kg</span>
                                </div>
                            </div>
                            
                            <h2>Types: </h2>
                            {
                                pokemon.types.map((x) => {
                                    // console.log(x.type.name)
                                    return <p>{x.type.name}</p>
                                })
                            }


                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3">Style:</span>
                                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                </div>
                            </div>

                            <div className="flex">
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add pokemon</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
