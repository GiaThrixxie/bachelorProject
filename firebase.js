// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM8ZdQh2BzqBbDaDG0Vr1MRfvmkoV39bM",
  authDomain: "bachelor-project-d2724.firebaseapp.com",
  databaseURL: "https://bachelor-project-d2724-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bachelor-project-d2724",
  storageBucket: "bachelor-project-d2724.appspot.com",
  messagingSenderId: "847411128835",
  appId: "1:847411128835:web:7984bf5c5e09c21d623c36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;