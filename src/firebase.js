import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAJjpFEno8xMGtsU9oy9Lv_JyJDYlHMM2U",
  authDomain: "facebook-messenger-clone-efc95.firebaseapp.com",
  projectId: "facebook-messenger-clone-efc95",
  storageBucket: "facebook-messenger-clone-efc95.appspot.com",
  messagingSenderId: "105592165209",
  appId: "1:105592165209:web:408e42aeb2d13e1165f248",
  measurementId: "G-212BZLRYKT",
});

const db = firebaseApp.firestore();

export default db;
