import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBc-mtBt9xanR6vrTh8QFprfYjAjjDku-Y",
  authDomain: "smartdingspm.firebaseapp.com",
  projectId: "smartdingspm",
  storageBucket: "smartdingspm.appspot.com",
  messagingSenderId: "837311030742",
  appId: "1:837311030742:web:77231139a0a9e1db64b077"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }