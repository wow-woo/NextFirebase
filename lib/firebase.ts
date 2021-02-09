import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyluxg-1SbdL18l2uwNT_X8CXZpZbct88",
  authDomain: "next-2844d.firebaseapp.com",
  projectId: "next-2844d",
  storageBucket: "next-2844d.appspot.com",
  messagingSenderId: "555287555041",
  appId: "1:555287555041:web:145fa186290a03547e40a0",
  measurementId: "G-WGG37XE6GN",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firebaseAuth = firebase.auth();
export const fireStore = firebase.firestore();
export const firebaseStorage = firebase.storage();
