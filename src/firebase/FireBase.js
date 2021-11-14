import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC5AiHuOJ_EENyFGaxD7uQv7AGPCUqAPiw",
    authDomain: "project-2f3a7.firebaseapp.com",
    projectId: "project-2f3a7",
    storageBucket: "project-2f3a7.appspot.com",
    messagingSenderId: "702186695425",
    appId: "1:702186695425:web:6d8cc28e9758d770f10900",
    measurementId: "G-NMMNE4S8CN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();