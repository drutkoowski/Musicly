import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDti448OMETW5lG-H_ejCtnSLBHOyup9ds",
  authDomain: "musicly-fbc94.firebaseapp.com",
  projectId: "musicly-fbc94",
  storageBucket: "musicly-fbc94.appspot.com",
  appId: "1:304055804133:web:cc1a2e267b2e053ddff40c",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection("users");

export { auth, db, usersCollection };