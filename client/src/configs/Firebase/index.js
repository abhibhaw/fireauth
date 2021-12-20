import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
} from "env";

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FirebaseApp);
