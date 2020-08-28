import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'




const config = {
    apiKey: "AIzaSyC8Uw9ThlxOC18r5R_I-T9bG6qUArguy3o",
    authDomain: "fitnessapp-swen325.firebaseapp.com",
    databaseURL: "https://fitnessapp-swen325.firebaseio.com",
    projectId: "fitnessapp-swen325",
    storageBucket: "fitnessapp-swen325.appspot.com",
    messagingSenderId: "408713018304",
    appId: "1:408713018304:web:382f3da8d8187bdb5c6625",
    measurementId: "G-QXBC1FQ0YF",
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const storage = firebaseApp.storage()

export { db, storage, firebase}