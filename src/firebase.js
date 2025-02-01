// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZF2X-JpJAAYjl4ooVzg5k5EwMcWSw-ss",
  authDomain: "e-learning-ehab.firebaseapp.com",
  projectId: "e-learning-ehab",
  storageBucket: "e-learning-ehab.firebasestorage.app",
  messagingSenderId: "368663825182",
  appId: "1:368663825182:web:6527304bbef150943b970f",
  measurementId: "G-9RC36XM7Z8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };