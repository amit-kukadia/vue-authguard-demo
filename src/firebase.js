import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyCqkldUBe62yB77p_3ijCyDf8AVBZBhtRg",
  authDomain: "vue-firebase-auth-179ca.firebaseapp.com",
  databaseURL: "https://vue-firebase-auth-179ca.firebaseio.com",
  projectId: "vue-firebase-auth-179ca",
  storageBucket: "vue-firebase-auth-179ca.appspot.com",
  messagingSenderId: "926521303910",
  appId: "1:926521303910:web:3d2ab3bade6d7e40299ea7",
  measurementId: "G-TZR2LGDLP5",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
