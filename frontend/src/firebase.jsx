import firebase from "firebase/compat/app";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCp_WZhM3ZvwVLZtw_VSGD82rTjtPc803g",
  authDomain: "haruharu-bssm.firebaseapp.com",
  projectId: "haruharu-bssm",
  storageBucket: "haruharu-bssm.appspot.com",
  messagingSenderId: "592527361214",
  appId: "1:592527361214:web:7a9e2f5e186b3e2759caef",
  measurementId: "G-YBJ0DMMB04"
};


const app = initializeApp(firebaseConfig);
const fireStore = getAnalytics(app);
const authService = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { fireStore, authService, db, app, storage };