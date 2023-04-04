import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATJgOdlbxSvTBwgip6T4CLHbfBWJs8JuI",
  authDomain: "med103tro.firebaseapp.com",
  projectId: "med103tro",
  storageBucket: "med103tro.appspot.com",
  messagingSenderId: "218026001309",
  appId: "1:218026001309:web:ab7b8ef4eb49c70c736574"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authFb = getAuth();