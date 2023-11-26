import React, { useState, useEffect } from "react";
import axios from "axios";

import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import firestore from "../firebase/firebaseConfig";

import { Pokemon } from "./Pokemon";

export const Pokedex = ({pokeArr}) => {
    const [pokemons, setPokemons] = useState([])

    const url = "https://pokeapi.co/api/v2/pokemon?limit=1500&offset=0"

    // Referencia de la Firebase
    const refFirebase = doc(firestore, 'Teams/principal')
    // function writePokeTeam() {
    //     const docData = {
    //         poke1: {
    //             name: 'bulbasaur',
    //             sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    //         }
    //     };
    //     setDoc(refFirebase, docData)
    // }
    // writePokeTeam()

    function listenToADocument(){
        onSnapshot(refFirebase, docSnapshot => {
            if (docSnapshot.exists()) {
                const docData = docSnapshot.data()
                console.log(docData)
            }
        })
    }
    listenToADocument()


    return(
        // <!-- source: https://redpixelthemes.com/ -->
        <>
            <div class="container relative z-40 mx-auto mt-12">
                <div class="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
                {
                    pokeArr.map((pokemon) => {
                        return <Pokemon key={pokemon.name} pokemon={pokemon}/>
                    })
                }
                </div>
            </div>
        </>
    )
}