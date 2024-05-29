import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // eslint-disable-next-line no-undef
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "adminui-project.firebaseapp.com",
  projectId: "adminui-project",
  storageBucket: "adminui-project.appspot.com",
  messagingSenderId: "328398258515",
  appId: "1:328398258515:web:5921242fbe59b7cb3de1a6",
  measurementId: "G-SWS4F9EPME"
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-irregular-whitespace
export const auth = getAuth();