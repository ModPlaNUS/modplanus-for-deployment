// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database";
import firebase from 'firebase/compat/app';
import {getFirestore} from 'firebase/firestore';
import 'firebase/compat/auth'
import 'firebase/compat/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCYZ2Y9igtGDmX8_Wb2RuLiFAQ9LEFir8",
  authDomain: "modplanus-official.firebaseapp.com",
  projectId: "modplanus-official",
  storageBucket: "modplanus-official.appspot.com",
  messagingSenderId: "304826245727",
  appId: "1:304826245727:web:1bddc3e8c43af38692b1ea",
  measurementId: "G-D5LRJHPYZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const auth = getAuth(app);
firebase.initializeApp(firebaseConfig);
export default firebaseConfig;