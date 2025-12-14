import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRok-em4Sf5_xkDZZW54MYPaNJkachIOU",
  authDomain: "coffee-store-auth-5ea79.firebaseapp.com",
  projectId: "coffee-store-auth-5ea79",
  storageBucket: "coffee-store-auth-5ea79.firebasestorage.app",
  messagingSenderId: "974438179774",
  appId: "1:974438179774:web:76ac21861ea1a34ddb8fef",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
