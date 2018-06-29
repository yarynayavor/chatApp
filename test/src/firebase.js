 import firebase from 'firebase';
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBAb8ZetG3ocBf92lGK5sHa7Z197paGU5Y",
    authDomain: "test-7d63a.firebaseapp.com",
    databaseURL: "https://test-7d63a.firebaseio.com",
    projectId: "test-7d63a",
    storageBucket: "",
    messagingSenderId: "244655299229"
  };
  //firebase.initializeApp(config);

const fb=firebase.initializeApp(config);

export default fb;