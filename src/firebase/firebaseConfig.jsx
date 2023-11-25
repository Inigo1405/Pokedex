// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseApp = initializeApp({

});


export const firestore = getFirestore();

export const auth = getAuth(firebaseApp)


// Link de ayuda:
// https://firebase.google.com/docs/firestore/quickstart?hl=es-419#node.js