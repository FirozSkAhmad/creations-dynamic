// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAxTaH3Zz7kZkIuUSG5UUk_MT6lxnYaxtM",
  authDomain: "creation-cms.firebaseapp.com",
  projectId: "creation-cms",
  storageBucket: "creation-cms.appspot.com",
  messagingSenderId: "644690099931",
  appId: "1:644690099931:web:5e716027084f554600d6fe",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);

export default (context, inject) => {
  inject('firebase', { db, auth });
};


