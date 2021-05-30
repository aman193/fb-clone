// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDfJXTtiiukoAGNbkIFD9Qav4es0952Xp4",
  authDomain: "anotherblog-45ca3.firebaseapp.com",
  projectId: "anotherblog-45ca3",
  storageBucket: "anotherblog-45ca3.appspot.com",
  messagingSenderId: "376172225167",
  appId: "1:376172225167:web:e70d8d1223ced7f817c6fa",
  measurementId: "G-5ZQ18XW0WV",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
