import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfVi9UtNn4TOG3SrEeCy1h4Shfg7_DDjc",
  authDomain: "instagram-clone-9144d.firebaseapp.com",
  databaseURL: "https://instagram-clone-9144d.firebaseio.com",
  projectId: "instagram-clone-9144d",
  storageBucket: "instagram-clone-9144d.appspot.com",
  messagingSenderId: "255906995438",
  appId: "1:255906995438:web:db40f0967ca3d4f3ebe7ff",
  measurementId: "G-5L9129VYXG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
