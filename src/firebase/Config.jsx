// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1LUbzNka7il72ToSJk4YzT-IzqQzPeSY",
  authDomain: "purechecker1234.firebaseapp.com",
  projectId: "purechecker1234",
  storageBucket: "purechecker1234.appspot.com",
  messagingSenderId: "985274905168",
  appId: "1:985274905168:web:cb85179db7343f7ce61755"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
