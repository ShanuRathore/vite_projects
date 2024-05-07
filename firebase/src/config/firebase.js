// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaqeZvQTJKij6X6y_QVzzukUlrfLHd9nY",
  authDomain: "vite-contact-5f997.firebaseapp.com",
  projectId: "vite-contact-5f997",
  storageBucket: "vite-contact-5f997.appspot.com",
  messagingSenderId: "1028621534460",
  appId: "1:1028621534460:web:6aad0f19cb02cc83b94379"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);