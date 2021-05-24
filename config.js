import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBbVlcb99DYyu2Qdfh52t46pbmXYnN5I-U",
  authDomain: "bedtimestories-a32db.firebaseapp.com",
  databaseURL: "https://bedtimestories-a32db.firebaseio.com",
  projectId: "bedtimestories-a32db",
  storageBucket: "bedtimestories-a32db.appspot.com",
  messagingSenderId: "746256077333",
  appId: "1:746256077333:web:2be79d6b16a88b34d8f41c"
};
  
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();