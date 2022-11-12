import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-_SHahQMpDhSy2hioGo76OnWK3HU968Y",
  authDomain: "clone-36b38.firebaseapp.com",
  projectId: "clone-36b38",
  storageBucket: "clone-36b38.appspot.com",
  messagingSenderId: "951172456331",
  appId: "1:951172456331:web:d63f99fffbbf26c76b998e",
  measurementId: "G-RC62KPD7MR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
