import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpDb_eJZJM1hUNspLnMbxn9XPirwnaH4M",
  authDomain: "redux-try.firebaseapp.com",
  databaseURL: "https://redux-try.firebaseio.com",
  projectId: "redux-try",
  storageBucket: "redux-try.appspot.com",
  messagingSenderId: "760691451449",
  appId: "1:760691451449:web:4ee44525668c92e0634fe8",
  measurementId: "G-10MZ3V5GNN",
};

export const fire = firebase.initializeApp(firebaseConfig);
// .settings({ timestampsInSnapshots: true });

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWtihGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export const firestore = firebase.firestore();
export default firebase;
