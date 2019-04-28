import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDWnreNnw8ga_sSI5rGUkpgmIQDjqzEcz4",
  authDomain: "catch-of-the-day-adam-k.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-adam-k.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
