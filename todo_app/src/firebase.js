// For Firebase JS SDK v7.20.0 and later, measurementId is optional



  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB0Snu24rzgYLxwa22mMW1AADxPEBozq2I",
    authDomain: "todo-app-a4183.firebaseapp.com",
    databaseURL: "https://todo-app-a4183.firebaseio.com",
    projectId: "todo-app-a4183",
    storageBucket: "todo-app-a4183.appspot.com",
    messagingSenderId: "802226619677",
    appId: "1:802226619677:web:1413b05160e75923540df4",
    measurementId: "G-6K1L0J6YXC"

  });
const db = firebaseApp.firestore();
export default db;