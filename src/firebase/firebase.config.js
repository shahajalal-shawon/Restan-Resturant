// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtB8eUxaCv3PODW_y75CFAmc_OAr5qB5k",
  authDomain: "assaignment-9-4eef5.firebaseapp.com",
  projectId: "assaignment-9-4eef5",
  storageBucket: "assaignment-9-4eef5.appspot.com",
  messagingSenderId: "316532465325",
  appId: "1:316532465325:web:12376429672fef640f7024",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
