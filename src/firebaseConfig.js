// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getStorage, ref,getDownloadURL } from "firebase/storage";

import { getAuth } from "firebase/auth";


//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';



//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5ZQuGSXH94dDfESV1AiDGq0OOAqtTl8c",
  authDomain: "prop-connect.firebaseapp.com",
  projectId: "prop-connect",
  storageBucket: "prop-connect.appspot.com",
  messagingSenderId: "209480156612",
  appId: "1:209480156612:web:3dc64cba34a186d3935091",
  measurementId: "G-TDY8EZK1JZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
const auth  = getAuth(app);
//const storage = getStorage();
//const analytics = getAnalytics(app);

export  { auth,db}