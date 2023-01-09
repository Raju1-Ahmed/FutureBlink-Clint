// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDIn2VirKTOazY5jOeczk--i8T2D0gV0Oo",
    authDomain: "futureblink-45747.firebaseapp.com",
    projectId: "futureblink-45747",
    storageBucket: "futureblink-45747.appspot.com",
    messagingSenderId: "364139051057",
    appId: "1:364139051057:web:6cfbf7f79775d1d6617d10",
    measurementId: "G-FXXS4VK38F"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;