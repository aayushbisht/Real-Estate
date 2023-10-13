// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "estate-test-2cf90.firebaseapp.com",
  projectId: "estate-test-2cf90",
  storageBucket: "estate-test-2cf90.appspot.com",
  messagingSenderId: "461025807684",
  appId: "1:461025807684:web:83f28d474ef38301c69b11"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);