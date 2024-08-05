import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// const config = useRuntimeConfig();

const firebaseConfig = {
  apiKey: "AIzaSyAxTaH3Zz7kZkIuUSG5UUk_MT6lxnYaxtM",
  authDomain: "creation-cms.firebaseapp.com",
  projectId: "creation-cms",
  storageBucket: "creation-cms.appspot.com",
  messagingSenderId: "644690099931",
  appId: "1:644690099931:web:5e716027084f554600d6fe"
  // measurementId: "G-12QMKCYXTY",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

// Initialize Firebase services
export const db = getFirestore(app);






export default defineNuxtPlugin(nuxtApp => {
  // Provide the Firebase services
  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);

  nuxtApp.vueApp.provide("firestore", firestore);
  nuxtApp.provide("firestore", firestore);

  nuxtApp.vueApp.provide("storage", storage);
  nuxtApp.provide("storage", storage);
  nuxtApp.provide('firebase', { db, auth });

});