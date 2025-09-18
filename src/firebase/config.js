import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyDGvVzZ6fhyWCUdptIwhURT5zfwtUzopRs",
  authDomain: "miniblog-86d48.firebaseapp.com",
  projectId: "miniblog-86d48",
  storageBucket: "miniblog-86d48.firebasestorage.app",
  messagingSenderId: "780193568642",
  appId: "1:780193568642:web:62bfb1eab818b65f06a19b"

};



const app  = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

export { app, auth, db };