// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB17oK9sA88CsESE37ifI1E8MMmKsxn02g",
  authDomain: "student-management-syste-fce3b.firebaseapp.com",
  projectId: "student-management-syste-fce3b",
  storageBucket: "student-management-syste-fce3b.firebasestorage.app",
  messagingSenderId: "399774842775",
  appId: "1:399774842775:web:c711fd54a104f0fe72ced2",
  measurementId: "G-0MSZRYC6GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth }