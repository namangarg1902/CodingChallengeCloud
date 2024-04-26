import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { initializeApp , getApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_API_KEY1,
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);


export { auth, firestore, app };