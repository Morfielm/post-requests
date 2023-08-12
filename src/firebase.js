import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBSL2W6lIXqZ-ewYG0qIo-e_Sbm7wZsEX4",
  authDomain: "morfielm.firebaseapp.com",
  projectId: "morfielm",
  storageBucket: "morfielm.appspot.com",
  messagingSenderId: "677932973319",
  appId: "1:677932973319:web:b9e58bdc70e4562d3959a2",
  measurementId: "G-R8TVYPEK5V",
  databaseURL: "https://morfielm-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);