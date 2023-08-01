import firebase from 'firebase/compat/app';
// Import the functions you need from the SDKs you need
import 'firebase/compat/firestore';
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIC3kTrCXLhwF4868hb13x9YQGVgf7_p8",
  authDomain: "clone-practice-f6b23.firebaseapp.com",
  projectId: "clone-practice-f6b23",
  storageBucket: "clone-practice-f6b23.appspot.com",
  messagingSenderId: "525899381708",
  appId: "1:525899381708:web:18c8704b7e622e24b23b69",
  measurementId: "G-XFPKBGRHGD"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };