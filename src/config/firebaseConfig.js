import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
