// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS0ltH6y1feLYa7PbWGa4vYhMX4vfz18U",
  authDomain: "react-pledges.firebaseapp.com",
  projectId: "react-pledges",
  storageBucket: "react-pledges.appspot.com",
  messagingSenderId: "378593789692",
  appId: "1:378593789692:web:f1fc4c6e89fe9afc1cb979",
  measurementId: "G-EM235NW1Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

export function logout() {
    return signOut(auth)
}

// Custom Hook
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user))
        return unsub;
    }, [])

    return currentUser;
}