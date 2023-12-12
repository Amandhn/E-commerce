import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCx3ialRKWt9yVuOeArat4eDnciTjP0feQ",
  authDomain: "mission-9ce4c.firebaseapp.com",
  projectId: "mission-9ce4c",
  storageBucket: "mission-9ce4c.appspot.com",
  messagingSenderId: "296079104753",
  appId: "1:296079104753:web:01c6addf9e027da772e750",
  measurementId: "G-Q1MVLWF07D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
