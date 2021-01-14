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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
