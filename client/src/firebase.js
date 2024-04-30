// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "blog-mern-2f952.firebaseapp.com",
  projectId: "blog-mern-2f952",
  storageBucket: "blog-mern-2f952.appspot.com",
  messagingSenderId: "843170724824",
  appId: "1:843170724824:web:5652d6089cceca4bdf90ad",
  measurementId: "G-YKC4MZRNHE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);