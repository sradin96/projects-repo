import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv_lCoyads_TaTGWDkn0zSWeE_3IE03dg",
  authDomain: "gg-games-df897.firebaseapp.com",
  projectId: "gg-games-df897",
  storageBucket: "gg-games-df897.appspot.com",
  messagingSenderId: "569390758145",
  appId: "1:569390758145:web:7c66516f667ab757f2c300",
  measurementId: "G-W7GQQPK516"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)