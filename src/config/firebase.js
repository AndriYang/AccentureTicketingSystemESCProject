

import { FirebaseConfig } from "./keys";
import firebase from "./firebaseConfig"

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
