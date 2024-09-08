// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABcx4yqA207FHRr-HmbszgkEIZkR9EKms",
  authDomain: "amazo-f035e.firebaseapp.com",
  projectId: "amazo-f035e",
  storageBucket: "amazo-f035e.appspot.com",
  messagingSenderId: "580952009968",
  appId: "1:580952009968:web:a19719a23eba786808a635",
  measurementId: "G-8LQ6J4KG89",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getauth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyABcx4yqA207FHRr-HmbszgkEIZkR9EKms",
//   authDomain: "amazo-f035e.firebaseapp.com",
//   projectId: "amazo-f035e",
//   storageBucket: "amazo-f035e.appspot.com",
//   messagingSenderId: "580952009968",
//   appId: "1:580952009968:web:a19719a23eba786808a635",
//   measurementId: "G-8LQ6J4KG89"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = getauth(app);
// export {db,auth};