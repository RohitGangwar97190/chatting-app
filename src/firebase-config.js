// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB7DgpzG4fku-2GO1aZf8ddz1LSYXu8nc",
  authDomain: "chatapp-787b8.firebaseapp.com",
  projectId: "chatapp-787b8",
  storageBucket: "chatapp-787b8.appspot.com",
  messagingSenderId: "68504380639",
  appId: "1:68504380639:web:8109360ce2594b63ebf56a",
  measurementId: "G-H1R71TQYKH"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);
// const analytics = getAnalytics(app);