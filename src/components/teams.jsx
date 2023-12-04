import React, { useState, useEffect } from "react";
import {
  doc,
  onSnapshot,
  updateDoc,
  setDoc,
  deleteDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';
import { firestore } from "../firebase/firebaseConfig";

const newPokemon = {
  name: '',
  sprite: ''
}

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
        // teamSelect.principal.poke1.sprites = team.sprites.front_default
        team.shift()
      }
      
      if (teamSelect.principal.poke2.name == '' && team.length >= 1){
        teamSelect.principal.poke2.name = team[i].name
        // teamSelect.principal.poke2.sprites = team.sprites.front_default
        team.shift()
      }
      
      if (teamSelect.principal.poke3.name == '' && team.length >= 1){
        teamSelect.principal.poke3.name = team[i].name
        // teamSelect.principal.poke2.sprites = team.sprites.front_default
        team.shift()
      }
      
      if (teamSelect.principal.poke4.name == '' && team.length >= 1){
        teamSelect.principal.poke4.name = team[i].name
        // teamSelect.principal.poke2.sprites = team.sprites.front_default
        team.shift()
      }

      if (teamSelect.principal.poke5.name == '' && team.length >= 1){
        teamSelect.principal.poke5.name = team[i].name
        // teamSelect.principal.poke2.sprites = team.sprites.front_default
        team.shift()
      }

      if (teamSelect.principal.poke6.name == '' && team.length >= 1){
        teamSelect.principal.poke6.name = team[i].name
        // teamSelect.principal.poke2.sprites = team.sprites.front_default
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
      <>
        <p>{teamSelect.principal.poke1.name}</p>
        <p>{teamSelect.principal.poke2.name}</p>
        <p>{teamSelect.principal.poke3.name}</p>
        <p>{teamSelect.principal.poke4.name}</p>
        <p>{teamSelect.principal.poke5.name}</p>
        <p>{teamSelect.principal.poke6.name}</p>
      </>
      
    );
  };

  return (
    <>
      <div>Teams</div>
      {readData ? (
        showTeam()
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

// https://github.com/samfromaway/firebase-tutorial/blob/master/src/SnapshotFirebaseAdvanced.js