import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBCsCd8K1RjSLRouGhsOLmzalf0tuinnxM",
    authDomain: "clone-82cda.firebaseapp.com",
    projectId: "clone-82cda",
    storageBucket: "clone-82cda.appspot.com",
    messagingSenderId: "1007876961985",
    appId: "1:1007876961985:web:62ac6b8353d68db2f84640"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth =firebase.auth();

  export {db,auth};