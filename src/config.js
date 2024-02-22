import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCD88ge_AgQ8Bwivs8Y-5hEml05WMyv76w",
  authDomain: "e-commerce-a68e6.firebaseapp.com",
  projectId: "e-commerce-a68e6",
  storageBucket: "e-commerce-a68e6.appspot.com",
  messagingSenderId: "984900560597",
  appId: "1:984900560597:web:1b0c4908c8572b65c3a45c",
  measurementId: "G-57H708BC0M"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app