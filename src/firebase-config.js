// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import { getAuth } from"firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBpJKTCeaYQVEzhPvqQTic4tLcauk_Ryvs",
  authDomain: "trvl-bddy.firebaseapp.com",
  projectId: "trvl-bddy",
  storageBucket: "trvl-bddy.appspot.com",
  messagingSenderId: "374776198241",
  appId: "1:374776198241:web:11bd4706a1154a07c66620"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 
export const auth = getAuth(app);