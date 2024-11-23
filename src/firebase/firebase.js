
import { initializeApp } from "firebase/app";
import { getfirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzOkKVd8qEzFluQM3UKpfk7p8gpAz5k4c",
  authDomain: "miniblog-fef71.firebaseapp.com",
  projectId: "miniblog-fef71",
  storageBucket: "miniblog-fef71.firebasestorage.app",
  messagingSenderId: "478535574303",
  appId: "1:478535574303:web:fd5237a5844728cf66062a"
};


const app = initializeApp(firebaseConfig);


const db = getfirestore(app);

export { db };