import React, { useState, useEffect } from "react";
import { doc, onSnapshot, setDoc, collection } from 'firebase/firestore';
import { firestore } from "../firebase/firebaseConfig";
import { newTeam } from "./formats";

export const Teams = ({ team, user }) => {
  const [teamSelect, setTeam] = useState([]);
  const [readData, setReadData] = useState(false);

  const collectionRef = collection(firestore, "users");

  useEffect(() => {
    const unsub = onSnapshot(collectionRef, (querySnapshot) => {
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

  useEffect(() => {
    // Add member when team or readData changes
    if (team.length >= 1 && readData) {
      const updatedTeamSelect = { ...teamSelect };

      for (let i = 1; i <= 6; i++) {
        const pokeNumber = `poke${i}`;
        if (updatedTeamSelect.principal[pokeNumber].name === '' && team.length >= 1) {
          updatedTeamSelect.principal[pokeNumber].name = team[0].name;
          updatedTeamSelect.principal[pokeNumber].sprites = team[0].sprites.front_default;
          team.shift();
        }
      }

      setDoc(doc(firestore, `users/${user}`), updatedTeamSelect);
    }
  }, [team, readData]);

  const deleteTeam = () => {
    setDoc(doc(firestore, `users/${user}`), newTeam);
  };

  const showTeam = () => {
    if (!teamSelect || !teamSelect.principal || !teamSelect.principal.poke1) {
      return <p>Loading...</p>;
    }

    return (
      <>
        {teamSelect.principal.poke1.name !== '' ? (
          <button onClick={deleteTeam} className="text-black bg-gray-300 border-0 ml-4 py-2 px-5 focus:outline-none hover:bg-red-700 rounded">
            Delete Team!
          </button>
        ) : (
          <p>New Team</p>
        )}
        <div className="flex justify-center flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="m-4 text-center">
              <img src={teamSelect.principal[`poke${i}`].sprites} alt="" className="w-32 h-32 mx-auto mb-2 rounded-full" />
              <p className="text-lg font-bold">{teamSelect.principal[`poke${i}`].name}</p>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <h1 className="mt-16">Teams</h1>
      {readData ? showTeam() : <p>Loading...</p>}
    </>
  );
};
