import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBANLTPDDqk07DMx-UvFgmsKJBzX915Yus",
  authDomain: "crown-db-7be35.firebaseapp.com",
  projectId: "crown-db-7be35",
  storageBucket: "crown-db-7be35.appspot.com",
  messagingSenderId: "753279163014",
  appId: "1:753279163014:web:4c01a7118e50b6f424cf07",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user: ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
