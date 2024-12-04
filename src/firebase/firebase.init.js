// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiRTwhrhXiPzDZ9jWgyxOd_yQWLe04ti4",
  authDomain: "assignment-10-6eb15.firebaseapp.com",
  projectId: "assignment-10-6eb15",
  storageBucket: "assignment-10-6eb15.firebasestorage.app",
  messagingSenderId: "258313100594",
  appId: "1:258313100594:web:bafc11a365b741cbfd0b2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app