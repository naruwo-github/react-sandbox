import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCzgGAQ9P0aGlWymHeW4qaAb3c4KX9FclE",
    authDomain: "sandbox01-4e82b.firebaseapp.com",
    projectId: "sandbox01-4e82b",
    storageBucket: "sandbox01-4e82b.appspot.com",
    messagingSenderId: "847001277070",
    appId: "1:847001277070:web:2b2abe7662562428b32fdf"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
export { db, auth }