// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseApp = initializeApp({
    apiKey: "AIzaSyAw3JaohuviQMjwuRf0hanQ62u0v4AmVOM",
    authDomain: "pokedex-9a748.firebaseapp.com",
    projectId: "pokedex-9a748",
    storageBucket: "pokedex-9a748.appspot.com",
    messagingSenderId: "337521747157",
    appId: "1:337521747157:web:334fb16fe02106cf092e5c"
});


const firestore = getFirestore();

export const auth = getAuth(firebaseApp)

export default [firestore, auth] 

// Link de ayuda:
// https://firebase.google.com/docs/firestore/quickstart?hl=es-419#node.js