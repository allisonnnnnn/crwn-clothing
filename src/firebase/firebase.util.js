import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDyd9AnNnRAWngbsSVxcZlxfvjoAhtrTSc",
  authDomain: "crwn-db-ef8b2.firebaseapp.com",
  databaseURL: "https://crwn-db-ef8b2.firebaseio.com",
  projectId: "crwn-db-ef8b2",
  storageBucket: "crwn-db-ef8b2.appspot.com",
  messagingSenderId: "553449670012",
  appId: "1:553449670012:web:938adda6704a9725a510f9",
  measurementId: "G-R25KXP6DK8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
