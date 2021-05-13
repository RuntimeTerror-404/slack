import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPmhqCYYcRQHdbv166I2peUDxiUb6rtsw",
  authDomain: "slack-clone-404.firebaseapp.com",
  projectId: "slack-clone-404",
  storageBucket: "slack-clone-404.appspot.com",
  messagingSenderId: "270984310026",
  appId: "1:270984310026:web:d1b7e375cbff2912cc5ef3",
  measurementId: "G-N3Z2E4GQ2B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
