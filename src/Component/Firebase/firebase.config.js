// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9RejQMLrmvDHEd3ONhn65D_oK17Lm_eg",
  authDomain: "foodbuzz-799f6.firebaseapp.com",
  projectId: "foodbuzz-799f6",
  storageBucket: "foodbuzz-799f6.appspot.com",
  messagingSenderId: "415595992690",
  appId: "1:415595992690:web:18e944b0d3d2f80cf094eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;