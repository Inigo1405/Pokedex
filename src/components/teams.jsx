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

export const Teams = ({team, user}) => {
  const [teamSelect, setTeam] = useState([]);

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
    });

    return () => {
      unsub();
    };
  }, []);


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