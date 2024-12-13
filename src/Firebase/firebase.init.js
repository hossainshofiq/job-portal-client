// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// VITE_apiKey=AIzaSyAoYusSg_BGUoUEAe16B7iIA3ltDAdjqjE
// VITE_authDomain=job-portal-9faeb.firebaseapp.com
// VITE_projectId=job-portal-9faeb
// VITE_storageBucket=job-portal-9faeb.firebasestorage.app
// VITE_messagingSenderId=384206792928
// VITE_appId=1:384206792928:web:548480e4cb45164dce8885

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;