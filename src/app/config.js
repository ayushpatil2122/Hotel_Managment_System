import { initializeApp } from "firebase/app";
import 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD7dZcEO91kCiE-zBSQIZDPmrWVol2Ew0A",
  authDomain: "foodappqr.firebaseapp.com",
  databaseURL: "https://foodappqr-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "foodappqr",
  storageBucket: "foodappqr.appspot.com",
  messagingSenderId: "925495029620",
  appId: "1:925495029620:web:26f516f31b27461732c621",
  measurementId: "G-XJC95E53H1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app};
export {db};
