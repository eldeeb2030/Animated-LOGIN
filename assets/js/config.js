
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/11.10.0/firebase- database.js";
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCN8U35KFb4ZJ9pElDMR2Za-qU2bLqoQzE",
    authDomain: "login-page-50824.firebaseapp.com",
    databaseURL: "https://login-page-50824-default-rtdb.firebaseio.com",
    projectId: "login-page-50824",
    storageBucket: "login-page-50824.firebasestorage.app",
    messagingSenderId: "769350914450",
    appId: "1:769350914450:web:447c4f707833f94fcb314b",
    measurementId: "G-MLE56NSCN2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const  database = getDatabase(app);

  export {database};