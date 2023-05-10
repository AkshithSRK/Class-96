import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCVLAjyW3R0CJPHGH9uqt8I9xqlulTe1-A",
  authDomain: "wireless-buzzer-ad8ae.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-ad8ae-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-ad8ae",
  storageBucket: "wireless-buzzer-ad8ae.appspot.com",
  messagingSenderId: "924979153996",
  appId: "1:924979153996:web:d76a5b2ca92aef51ad78e9",
  measurementId: "G-V8H4HS52WF"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()