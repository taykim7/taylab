// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3T1yNQ90bhH9UrKHiR7ez6hIOWyia7b4",
  authDomain: "taylab-bc1ab.firebaseapp.com",
  projectId: "taylab-bc1ab",
  storageBucket: "taylab-bc1ab.appspot.com",
  messagingSenderId: "948414322886",
  appId: "1:948414322886:web:dc24d9d4c3c5cad0b91fc7",
  measurementId: "G-X38ETBVM40"
};

// Initialize Firebase
const firebassApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(firebassApp);
auth.languageCode = 'ko';

connectAuthEmulator(auth, "http://localhost:9099");