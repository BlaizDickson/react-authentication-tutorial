// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj1Wh8s2DC7gfG4L95ImWGp99S2lbcHe8",
  authDomain: "fir-auth-114e3.firebaseapp.com",
  projectId: "fir-auth-114e3",
  storageBucket: "fir-auth-114e3.appspot.com",
  messagingSenderId: "634364569797",
  appId: "1:634364569797:web:7aae686d044fda600d28ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);