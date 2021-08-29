// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';
// import { getAuth,  GoogleAuthProvider  } from "firebase/auth";
import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyBXoQ4Is8Q_9JdVkU5GtMx3eBrfDtJsn8Q",
    authDomain: "teleconvo.firebaseapp.com",
    projectId: "teleconvo",
    storageBucket: "teleconvo.appspot.com",
    messagingSenderId: "750666256573",
    appId: "1:750666256573:web:33d93595f8ab61a7c267d4",
    measurementId: "G-NXTWJ16BL0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth,provider};
  export default db;