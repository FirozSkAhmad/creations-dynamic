import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: "AIzaSyAw_zaVjIULBfmdjyKTaK96V1pmDhVsdHs",
    authDomain: "creations-website.firebaseapp.com",
    projectId: "creations-website",
    storageBucket: "creations-website.appspot.com",
    messagingSenderId: "1005206230558",
    appId: "1:1005206230558:web:edef361c5fa4526a86800f",
    measurementId: "G-12QMKCYXTY",
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const storage = getStorage(app);


  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);

  nuxtApp.vueApp.provide("firestore", firestore);
  nuxtApp.provide("firestore", firestore);

  nuxtApp.vueApp.provide("storage", storage);
  nuxtApp.provide("storage", storage);
});
