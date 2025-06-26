// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";

import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyD2BYtPfaRo-NUvOPhVjOvMkHD5ysQijpw",
authDomain: "projet-test-eaa63.firebaseapp.com",
databaseURL: "https://projet-test-eaa63-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "projet-test-eaa63",
storageBucket: "projet-test-eaa63.firebasestorage.app",
messagingSenderId: "63118243471",
appId: "1:63118243471:web:58ea126a50f3e6c6a9a2fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Créer la référence de BDD firebase
const bdd = getDatabase(app); //ici je récupère la base de donné de Firebase
const DBref = ref(bdd); // -> je converse sa référence pour l'utiliser plus tard

DBref.child("users");

