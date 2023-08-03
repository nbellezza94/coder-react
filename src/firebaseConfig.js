import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDb1jBBVIlUPcji8hCDHef7efVxIrYnM9M",
    authDomain: "e-commerce-nbellezza.firebaseapp.com",
    projectId: "e-commerce-nbellezza",
    storageBucket: "e-commerce-nbellezza.appspot.com",
    messagingSenderId: "322897672511",
    appId: "1:322897672511:web:1794fe89f8f2e641cd3b8a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)