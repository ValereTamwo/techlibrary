// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArN8A68bm7uS3gwjha84ZntB60NvSkjpg",
  authDomain: "techlibrary-6443d.firebaseapp.com",
  projectId: "techlibrary-6443d",
  storageBucket: "techlibrary-6443d.appspot.com",
  messagingSenderId: "319713688111",
  appId: "1:319713688111:web:6b7a197046adf10458a4da",
  measurementId: "G-1L8CRGRSZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export  {app,analytics,db};
