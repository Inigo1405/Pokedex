import React from 'react'



export const Teams = ({team}) => {

  return (
    <>
      <div>Teams</div>
      {
        team.map((poke)=>{
          return <p>{poke.name}</p>
        })
      }
    </>

  )
}
