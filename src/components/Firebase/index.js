// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdXVk2It0mN_b0xTvHr7725UkIOabc-Rc",
  authDomain: "educative-firebase-react-fb7c9.firebaseapp.com",
  projectId: "educative-firebase-react-fb7c9",
  storageBucket: "educative-firebase-react-fb7c9.appspot.com",
  messagingSenderId: "1050790414897",
  appId: "1:1050790414897:web:00482acb2a6ed8b6dc2310",
  measurementId: "G-DJ3MWD1SCQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
