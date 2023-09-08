import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB1ijxFjgvFTHD0YxdUWWbd-JHHLTX9Z_A",
    authDomain: "authdemo-51401.firebaseapp.com",
    projectId: "authdemo-51401",
    storageBucket: "authdemo-51401.appspot.com",
    messagingSenderId: "839038091887",
    appId: "1:839038091887:web:36edd296e151f353afc39a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)