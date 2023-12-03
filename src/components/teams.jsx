import React from 'react'


export const Teams = ({team, user}) => {


  return (
    <>
      {user ? <p>{user}</p> : <p>Sin registrar</p> }
      <div>Teams</div>
      {
        team.map((poke)=>{
          return <p>{poke.name}</p>
        })
      }
    </>

  )
}
