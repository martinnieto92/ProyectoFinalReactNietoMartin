// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJsyHtEWgRg_QUe-Nj7ZPh_Sx2FmSbpVw",
    authDomain: "proyectofinalnieto.firebaseapp.com",
    projectId: "proyectofinalnieto",
    storageBucket: "proyectofinalnieto.appspot.com",
    messagingSenderId: "1026996402451",
    appId: "1:1026996402451:web:8a25c1ff56abe49e5a82e6",
    measurementId: "G-WK9FWJSL8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);