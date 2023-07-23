// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCURjQKdNWbiWNrW7vEjwpMdvvUZz8XoOE",
  authDomain: "finance-tracker-87c86.firebaseapp.com",
  projectId: "finance-tracker-87c86",
  storageBucket: "finance-tracker-87c86.appspot.com",
  messagingSenderId: "726997271556",
  appId: "1:726997271556:web:62375ccdd52bd8bfe06151"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, doc, setDoc };