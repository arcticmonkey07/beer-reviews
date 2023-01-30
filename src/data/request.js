import { ref, onValue } from "firebase/database";
import { db } from "../data/firebase";

export const getReviews = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      onValue(ref(db), (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          resolve(Object.values(data));
        }
      });
    }, 500);
  });
