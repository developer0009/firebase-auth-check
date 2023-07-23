// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqfNuDf3rIxLbf-Mlc73pzs9U-xGl4I1I",
  authDomain: "red-abstraction-383514.firebaseapp.com",
  projectId: "red-abstraction-383514",
  storageBucket: "red-abstraction-383514.appspot.com",
  messagingSenderId: "603748078222",
  appId: "1:603748078222:web:9b5b36f2e12c7537656fdf",
  measurementId: "G-N3S39V0E4M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
