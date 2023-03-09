// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }  from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQIwMVb7nnRRoPT4sJHrykKAGHWyXLQgE",
  authDomain: "audiohm-f0417.firebaseapp.com",
  projectId: "audiohm-f0417",
  storageBucket: "audiohm-f0417.appspot.com",
  messagingSenderId: "415950471624",
  appId: "1:415950471624:web:2b7b38d8304a1da25680fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export {db}