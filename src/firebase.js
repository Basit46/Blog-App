import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASCKgdOohWg_84jwKrox-miMtoix9v5g8",
  authDomain: "perosnal-blog.firebaseapp.com",
  projectId: "perosnal-blog",
  storageBucket: "perosnal-blog.appspot.com",
  messagingSenderId: "267865566330",
  appId: "1:267865566330:web:252d6e3ed6d236655b9fc3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
