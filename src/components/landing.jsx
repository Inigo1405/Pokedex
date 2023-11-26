import React from 'react'

export const Landing = ({page}) => {
  return (
    <>
        <dv class="bg-gray-100">
            <div class="min-h-screen flex items-center justify-center">
                <img src="/public/pokebola.ico" class="items-center mb-8 w-60" alt="" />
                <div class="max-w-2xl w-full px-4">
                    <h1 class="text-4xl font-bold text-center mb-8">Welcome to the pokedex!</h1>
                    <form class="flex flex-col md:flex-row justify-center items-center gap-4">
                        <button onClick={() => page(3)} class="bg-black hover:bg-gray-700 text-white py-2 px-8 border rounded-full">Get started</button>
                    </form>
                </div>
            </div>
        </dv>
    </>
  )
}
