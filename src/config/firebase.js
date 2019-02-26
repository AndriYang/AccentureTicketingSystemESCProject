import firebase from "./firebaseConfig";

const databaseRef = firebase.database().ref();
console.log("hello frebase why are you not working",databaseRef);
export const todosRef = databaseRef.child("todos");
