/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDwJ_aZ_qiqQn9iI126Rqrp2ZM2LGEBY4",
    authDomain: "login-a7fd1.firebaseapp.com",
    projectId: "login-a7fd1",
    storageBucket: "login-a7fd1.appspot.com",
    messagingSenderId: "952786073933",
    appId: "1:952786073933:web:0063a7fe1bb1dc8b071f04",
    measurementId: "G-XSZE9QP2T9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
