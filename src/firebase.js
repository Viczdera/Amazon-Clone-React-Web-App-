// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBqp-uBtG4M6qIhUMPwN9ttWAwoUXRQ4yQ",
    authDomain: "react-deploys.firebaseapp.com",
    projectId: "react-deploys",
    storageBucket: "react-deploys.appspot.com",
    messagingSenderId: "562402208873",
    appId: "1:562402208873:web:3b8f5bdba8b7d4e28206f8",
    measurementId: "G-FWV7W5HMEV"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const database= firebaseApp.firestore();
const auth= firebase.auth();

export {database, auth};