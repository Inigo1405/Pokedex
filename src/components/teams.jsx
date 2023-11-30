import React, { useEffect, useState } from 'react'

export const Teams = ({x}) => {
  const [teamSelected, setTeamSelected] = useState([]);


  useEffect(()=>{
    setTeamSelected([x])
  }, [])


  return (
    <>
      <div>Teams</div>
    
      {
        teamSelected.map((poke)=>{
          return <p>{poke.name}</p>
        })
      }
    </>

  )
}
