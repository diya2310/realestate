// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-30a79.firebaseapp.com",
  projectId: "mern-estate-30a79",
  storageBucket: "mern-estate-30a79.appspot.com",
  messagingSenderId: "287880186825",
  appId: "1:287880186825:web:8059475aa36f978bf5b618"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
