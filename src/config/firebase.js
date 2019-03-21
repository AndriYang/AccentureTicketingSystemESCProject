

import { FirebaseConfig } from "./keys";
import firebase from "./firebaseConfig"
import { firestoreConnect } from 'react-redux-firebase'
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
