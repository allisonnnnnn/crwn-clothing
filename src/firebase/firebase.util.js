import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyd9AnNnRAWngbsSVxcZlxfvjoAhtrTSc",
  authDomain: "crwn-db-ef8b2.firebaseapp.com",
  databaseURL: "https://crwn-db-ef8b2.firebaseio.com",
  projectId: "crwn-db-ef8b2",
  storageBucket: "crwn-db-ef8b2.appspot.com",
  messagingSenderId: "553449670012",
  appId: "1:553449670012:web:938adda6704a9725a510f9",
  measurementId: "G-R25KXP6DK8"
};

// function allow us to add signin users(from authentication) into our Database users collection as a document via uid

// userAuth are the user documents saved in firebase database already

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // console.log(userAuth);
  // console.log(additionalData);
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch(() => {});

export default firebase;
