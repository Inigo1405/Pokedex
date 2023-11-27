import React from 'react'

export const PokeCard = ({page, pokemon}) => {
    // console.log(pokemon)


    // pokemons.map((pokemon) => {
    //     return <Pokemon key={pokemon.name} pokemon={pokemon} poke={pokeCard} numPage={page}/>
    // })
    
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

    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-4 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt={pokemon.name} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={pokemon.sprites.front_default} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <button onClick={() => page(3)} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Back</button>
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">#{pokemon.id}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{pokemon.name}</h1>
                            {/* <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p> */}
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
                                    console.log(x.type.name)
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
                                <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
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


// import React from "react";
// // import { PropertyDefaultWrapper } from "./PropertyDefaultWrapper";

// export const PokeCard = ({page, pokemon}) => {
//   return (
//     <div className="bg-white flex flex-row justify-center w-full">
//       <div className="bg-white w-[1728px] h-[1117px] relative">
//         <div className="absolute w-[864px] h-[721px] top-[198px] left-[107px] bg-[#fb8686] rounded-[50px]">
//         <img src={pokemon.sprites.front_default} alt={pokemon.name} className='w-40' />
//         </div>
//         <div className="w-[1728px] h-[100px] top-[1017px] bg-[#484848] absolute left-0" />
//         <div className="absolute w-[629px] h-[527px] top-[198px] left-[1021px]">
//           <div className="absolute top-[265px] left-[14px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[29.7px] tracking-[0] leading-[normal]">
//             Category
//           </div>
//           <div className="absolute w-[173px] h-[53px] top-[256px] left-[250px]">
//             <div className="w-[175px] h-[53px]">
//               <div className="relative w-[173px] h-[53px] bg-white rounded-[33.93px]">
//                 <div className="absolute top-[11px] left-[50px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[25.4px] tracking-[0] leading-[normal]">
//                   Flame
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="absolute w-[471px] h-[94px] top-[433px] left-[14px]">
//             <div className="absolute top-0 left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[29.7px] tracking-[0] leading-[normal]">
//               Weakness
//             </div>
//             <div className="absolute w-[469px] h-[37px] top-[57px] left-0">
//               <div className="absolute w-[137px] h-[37px] top-0 left-0">
//                 <div className="w-[139px] h-[37px]">
//                   <div className="bg-[#08d2ff] relative w-[137px] h-[37px] rounded-[20.31px]">
//                     <div className="absolute top-[8px] left-[43px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[17.8px] tracking-[0] leading-[normal]">
//                       Water
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute w-[137px] h-[37px] top-0 left-[332px]">
//                 <div className="w-[139px] h-[37px]">
//                   <div className="bg-[#9a9c35] relative w-[137px] h-[37px] rounded-[20.31px]">
//                     <div className="absolute top-[8px] left-[47px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[17.8px] tracking-[0] leading-[normal]">
//                       Rock
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute w-[139px] h-[37px] top-0 left-[166px]">
//                 <div className="relative w-[137px] h-[37px] rounded-[20.31px] [background:linear-gradient(180deg,rgb(239.29,255,58.65)_46.46%,rgb(155,157,54)_49.48%)]">
//                   <div className="absolute top-[8px] left-[37px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[17.8px] tracking-[0] leading-[normal]">
//                     Ground
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="absolute w-[621px] h-[238px] top-0 left-0">
//             <div className="absolute w-[621px] h-[238px] top-0 left-0">
            //   <div className="absolute w-[621px] h-[71px] top-0 left-0 bg-[#545454] rounded-[25.45px]">
            //     <div className="relative w-[393px] h-[53px] top-[9px] left-[32px]">
            //       <div className="absolute top-[8px] left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[29.7px] tracking-[0] leading-[normal]">
            //         Height
            //       </div>
            //       <div className="absolute w-[175px] h-[53px] top-0 left-[218px]">
            //         <div className="relative w-[173px] h-[53px] bg-white rounded-[33.93px]">
            //           <div className="absolute top-[12px] left-[63px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[25.4px] tracking-[0] leading-[normal]">
            //             1.1m
            //           </div>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
//               <img
//                 className="w-[621px] h-[71px] top-[167px] absolute left-0"
//                 alt="Rectangle"
//                 src="rectangle-3374.svg"
//               />
//             </div>
//             <div className="absolute w-[393px] h-[53px] top-[176px] left-[32px]">
//               <div className="absolute top-[8px] left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[29.7px] tracking-[0] leading-[normal]">
//                 Hability
//               </div>
//               <div className="absolute w-[175px] h-[53px] top-0 left-[218px]">
//                 <div className="relative w-[173px] h-[53px] bg-white rounded-[33.93px]">
//                   <div className="absolute top-[12px] left-[54px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[25.4px] tracking-[0] leading-[normal]">
//                     Blaze
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute top-[98px] left-[23px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[29.7px] tracking-[0] leading-[normal]">
//               Weight
//             </div>
//             <div className="absolute w-[175px] h-[53px] top-[89px] left-[250px]">
//               <div className="relative w-[173px] h-[53px] bg-white rounded-[33.93px]">
//                 <div className="absolute top-[12px] left-[53px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[25.4px] tracking-[0] leading-[normal]">
//                   19.5kg
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="absolute w-[621px] h-[71px] top-[327px] left-[3px] bg-[#545454] rounded-[25.45px]">
//             <div className="absolute top-[16px] left-[13px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#fffcfc] text-[29.7px] tracking-[0] leading-[normal]">
//               Gender
//             </div>
//             <div className="absolute w-[173px] h-[53px] top-[9px] left-[251px]">
//               <div className="relative h-[53px] bg-[#fffcfc] rounded-[33.93px] border-[0.85px] border-solid border-white">
//                 <img
//                   className="absolute w-[60px] h-[39px] top-[6px] left-[56px] object-cover"
//                   alt="Gender symbols side"
//                   src="gender-symbols-side-by-side-solid-1.png"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
