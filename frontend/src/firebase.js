// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sitecraftai-87035.firebaseapp.com",
  projectId: "sitecraftai-87035",
  storageBucket: "sitecraftai-87035.firebasestorage.app",
  messagingSenderId: "914252896780",
  appId: "1:914252896780:web:c236500af17cd950dbec29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};