// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKbJTiKo94ib7wCPTzOzPKpZeweTs-wtI",
  authDomain: "civix-4f64a.firebaseapp.com",
  projectId: "civix-4f64a",
  storageBucket: "civix-4f64a.firebasestorage.app",
  messagingSenderId: "431249497807",
  appId: "1:431249497807:web:5ae3a19974d2c275e6a1ba",
  measurementId: "G-NWYR0BG411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);