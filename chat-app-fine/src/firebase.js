import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { apiKey, appId } from "./secret/config"

const firebaseApp = firebase.initializeApp({
    apiKey: apiKey,
    authDomain: "sandbox01-4e82b.firebaseapp.com",
    projectId: "sandbox01-4e82b",
    storageBucket: "sandbox01-4e82b.appspot.com",
    messagingSenderId: "847001277070",
    appId: appId
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
export { db, auth }