// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzF0cTz1uZikLM1kkZwD3bYg6sU6I9J-w",
  authDomain: "aulafirebase-82be8.firebaseapp.com",
  projectId: "aulafirebase-82be8",
  storageBucket: "aulafirebase-82be8.appspot.com",
  messagingSenderId: "857433069109",
  appId: "1:857433069109:web:29444c5c898479653f037c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);