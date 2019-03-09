
import 'firebase/firestore'
import 'firebase/auth'
import * as firebase from "firebase"

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD8FgdTChadSQ5LbHq0aZlW4YqlpyxlxLw",
  authDomain: "ticketingsystem-e62e3.firebaseapp.com",
  databaseURL: "https://ticketingsystem-e62e3.firebaseio.com",
  projectId: "ticketingsystem-e62e3",
  storageBucket: "ticketingsystem-e62e3.appspot.com",
  messagingSenderId: "597615598983"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
