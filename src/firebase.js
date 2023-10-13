
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { initializeApp } from 'firebase/app';
import firebase from "firebase";
// <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-storage.js"></script>

const firebaseConfig = {
  apiKey: "AIzaSyDlSpwfOgLbnE3_0pD3ukBQzt8miZEuQMk",
  authDomain: "disney-clone-816af.firebaseapp.com",
  projectId: "disney-clone-816af",
  storageBucket: "disney-clone-816af.appspot.com",
  messagingSenderId: "267050975163",
  appId: "1:267050975163:web:1cb1fcca05e17e2115ce9e",
  measurementId: "G-H00R4WR642"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;