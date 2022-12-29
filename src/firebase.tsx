import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB7lbiP1I-sleN4T40u5-1Xksu3xGNSONk",
    authDomain: "slack-clone-9b0f8.firebaseapp.com",
    projectId: "slack-clone-9b0f8",
    storageBucket: "slack-clone-9b0f8.appspot.com",
    messagingSenderId: "223288937299",
    appId: "1:223288937299:web:e2af4c5d7c92f626a9efa6"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  
  const provider = new GoogleAuthProvider();
  
  export { auth, provider, db }