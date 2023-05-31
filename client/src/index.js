import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw_GA5wuQYKKR23G0WdBvUT01xV_arBa8",
  authDomain: "sign-language-translator-6d415.firebaseapp.com",
  projectId: "sign-language-translator-6d415",
  storageBucket: "sign-language-translator-6d415.appspot.com",
  messagingSenderId: "898571762645",
  appId: "1:898571762645:web:794dc5900a08c327d5db5c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
