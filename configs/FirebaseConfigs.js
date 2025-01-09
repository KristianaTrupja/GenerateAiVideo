// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-short-video-generator-e6b5b.firebaseapp.com",
  projectId: "ai-short-video-generator-e6b5b",
  storageBucket: "ai-short-video-generator-e6b5b.firebasestorage.app",
  messagingSenderId: "217893753587",
  appId: "1:217893753587:web:5f093caa158e2570881d86",
  measurementId: "G-XLCV9MPKBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)