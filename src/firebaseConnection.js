// Import the functions you need from the SDKs you need
import { initializeApp,  getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzUOaQ7RBkDkqNquy7wxQVE165s6A6Z60",
  authDomain: "fir-reactnative-9f3f5.firebaseapp.com",
  projectId: "fir-reactnative-9f3f5",
  storageBucket: "fir-reactnative-9f3f5.firebasestorage.app",
  messagingSenderId: "720725071033",
  appId: "1:720725071033:web:777411a152189fb08f7768",
  measurementId: "G-F34KS3F79E"
};


const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app);

export default app;
