// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdfXrUx0zMlXBhcw0T0Fd4FTAaygN3w-o",
  authDomain: "flashcard-ed2d2.firebaseapp.com",
  projectId: "flashcard-ed2d2",
  storageBucket: "flashcard-ed2d2.appspot.com",
  messagingSenderId: "848737873820",
  appId: "1:848737873820:web:a997faace0098e51af2259",
  measurementId: "G-ZEJEQPB4GW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
