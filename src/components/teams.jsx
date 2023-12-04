import React, { useState, useEffect } from "react";
import { doc, onSnapshot, setDoc, collection } from 'firebase/firestore';
import { firestore } from "../firebase/firebaseConfig";


export const Teams = ({team, user}) => {
  const [teamSelect, setTeam] = useState([]);
  const [readData, setReadData] = useState(false);

  const colletionRef = collection(firestore, "users");

  useEffect(() => {
    const unsub = onSnapshot(colletionRef, (querySnapshot) => {
      let items = undefined;
      querySnapshot.forEach((doc) => {
        if (doc.id === user) {
          items = doc.data();
        }
      });
      setTeam(items);
      setReadData(true);
    });

    return () => {
      unsub();
    };
  }, []);


  // Add member
  if (team.length >= 1 && readData == true){
    for (let i = 0; i < team.length; i++){  
      if (teamSelect.principal.poke1.name == '' && team.length >= 1){
        teamSelect.principal.poke1.name = team[i].name
        teamSelect.principal.poke1.sprites = team[i].sprites.front_default
        team.shift()
      }
      
      if (teamSelect.principal.poke2.name == '' && team.length >= 1){
        teamSelect.principal.poke2.name = team[i].name
        teamSelect.principal.poke2.sprites = team[i].sprites.front_default
        team.shift()
      }
      
      if (teamSelect.principal.poke3.name == '' && team.length >= 1){
        teamSelect.principal.poke3.name = team[i].name
        teamSelect.principal.poke3.sprites = team[i].sprites.front_default
        team.shift()
      }
      
      if (teamSelect.principal.poke4.name == '' && team.length >= 1){
        teamSelect.principal.poke4.name = team[i].name
        teamSelect.principal.poke4.sprites = team[i].sprites.front_default
        team.shift()
      }

      if (teamSelect.principal.poke5.name == '' && team.length >= 1){
        teamSelect.principal.poke5.name = team[i].name
        teamSelect.principal.poke5.sprites = team[i].sprites.front_default
        team.shift()
      }

      if (teamSelect.principal.poke6.name == '' && team.length >= 1){
        teamSelect.principal.poke6.name = team[i].name
        teamSelect.principal.poke6.sprites = team[i].sprites.front_default
        team.shift()
      }
    }
    
    setDoc(doc(firestore, `users/${user}`), teamSelect);
  }
  
  console.log(team)


  

  // setDoc(doc(firestore, `users/${userCredential.user.uid}`), newTeam);

  const showTeam = () => {
    if (!teamSelect || !teamSelect.principal || !teamSelect.principal.poke1) {
      // Data is not yet loaded, or structure is different
      return <p>Loading...</p>;
    }

    return (
      <div className="flex justify-center wrap">
        <div className="m-4 text-center">
          <img src={teamSelect.principal.poke1.sprites} alt="" className="w-32 h-32 mx-auto mb-2 rounded-full" />
          <p className="text-lg font-bold">{teamSelect.principal.poke1.name}</p>

          <img src={teamSelect.principal.poke2.sprites} alt="" className="w-32 h-32 mx-auto mb-2 rounded-full" />
          <p className="text-lg font-bold">{teamSelect.principal.poke2.name}</p>

          <img src={teamSelect.principal.poke3.sprites} alt="" className="w-32 h-32 mx-auto mb-2 rounded-full" />
          <p className="text-lg font-bold">{teamSelect.principal.poke3.name}</p>

          <img src={teamSelect.principal.poke4.sprites} alt="" className="w-32 h-32 mx-auto mb-2 rounded-full" />
          <p className="text-lg font-bold">{teamSelect.principal.poke4.name}</p>

          <img src={teamSelect.principal.poke5.sprites} alt="" className="w-32 h-32 mx-auto mb-2 rounded-full" />
          <p className="text-lg font-bold">{teamSelect.principal.poke5.name}</p>
          
          <img src={teamSelect.principal.poke6.sprites} alt="" className="w-32 h-32 mx-auto mb-2 rounded-full" />
          <p className="text-lg font-bold">{teamSelect.principal.poke6.name}</p>
        </div>
      </div>
      
    );
  };

  return (
    <>
      <h1 className="mt-16">Teams</h1>
      {readData ? (
        showTeam()
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

// https://github.com/samfromaway/firebase-tutorial/blob/master/src/SnapshotFirebaseAdvanced.js