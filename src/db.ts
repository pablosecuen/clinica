import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; // o 'firebase/database' si usas Realtime Database


const firebaseConfig = {
    apiKey: "AIzaSyA_kwMD3wVXiuKYoqfQEghIPf3n2fZ4lrA",
    authDomain: "clinica-a0044.firebaseapp.com",
    projectId: "clinica-a0044",
    storageBucket: "clinica-a0044.appspot.com",
    messagingSenderId: "287738774897",
    appId: "1:287738774897:web:8e2db8eb76bae49d5e62d0",
    measurementId: "G-DQ3ZP5C9NZ"
};

// Inicializa la conexión con Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

export default db;
