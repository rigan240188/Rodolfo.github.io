import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyDiMjMGA3_cWFILNtoVK96xxDNXzQe9gOg",
    authDomain: "pronub.firebaseapp.com",
    projectId: "pronub",
    storageBucket: "pronub.firebasestorage.app",
    messagingSenderId: "502044938131",
    appId: "1:502044938131:web:e6bb205f3d41a2438d2266",
    measurementId: "G-8RV42Y19PE"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
