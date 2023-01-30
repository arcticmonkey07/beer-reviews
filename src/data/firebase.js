import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDty518Bzw-8RDXZnwhy5EALj5SHgqijC0",
  authDomain: "beer-reviews-bcce1.firebaseapp.com",
  projectId: "beer-reviews-bcce1",
  storageBucket: "beer-reviews-bcce1.appspot.com",
  messagingSenderId: "364155673379",
  appId: "1:364155673379:web:84a8e9f94df9c69f658a96",
  measurementId: "G-HWMGKEZQSC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);