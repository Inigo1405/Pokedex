import React from 'react'



export const Teams = ({team}) => {

  return (
    <>
      <div>Teams</div>
      {
        x.map((poke)=>{
          return <p>{poke.name}</p>
        })
      }
    </>

  )
}
