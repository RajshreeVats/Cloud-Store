import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCCZF2Ryw_vQ43si6I_7oU0nttDNv-UJ64",
    authDomain: "editx-dev.firebaseapp.com",
    projectId: "editx-dev",
    storageBucket: "editx-dev.appspot.com",
    messagingSenderId: "69483335725",
    appId: "1:69483335725:web:36f6dd54d5d9f39ba8e8a4"
})


const firestore = app.firestore()              //gives access of everything so instead use const and export only 
export const database = {                      //which is required
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = app.storage()
export const auth = app.auth()
export default app