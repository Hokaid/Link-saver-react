import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA2y2VoQuPZKxLNumC7nT8CWUO8N-DsZcM",
    authDomain: "fb-crud-react-f28ee.firebaseapp.com",
    projectId: "fb-crud-react-f28ee",
    storageBucket: "fb-crud-react-f28ee.appspot.com",
    messagingSenderId: "21437704828",
    appId: "1:21437704828:web:c5695c2e25f359c56877f9"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();