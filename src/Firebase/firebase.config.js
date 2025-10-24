// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV30KfyKUG-NjV27xDqB847Kl8NwKGkLM",
  authDomain: "pet-care-9edab.firebaseapp.com",
  projectId: "pet-care-9edab",
  storageBucket: "pet-care-9edab.firebasestorage.app",
  messagingSenderId: "820683291857",
  appId: "1:820683291857:web:e588e4247f8328276519f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;