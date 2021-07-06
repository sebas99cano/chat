import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyC-B0CkcLFB2Fa-wRSEwmOydQb1ak9ODLE",
  authDomain: "chatty-2052f.firebaseapp.com",
  projectId: "chatty-2052f",
  storageBucket: "chatty-2052f.appspot.com",
  messagingSenderId: "102528789607",
  appId: "1:102528789607:web:65a364f5a24e3c77ce38c2",
  measurementId: "G-3ENQ7F7WGB"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
