import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvHpsEWGl3pv2k0bhydyB9vvXnjXy-AnI",
  authDomain: "rick-morty-7abf4.firebaseapp.com",
  databaseURL: "https://rick-morty-7abf4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rick-morty-7abf4",
  storageBucket: "rick-morty-7abf4.appspot.com",
  messagingSenderId: "384147339180",
  appId: "1:384147339180:web:e8992571e814b831576c09"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };