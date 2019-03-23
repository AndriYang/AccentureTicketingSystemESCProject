import { todosRef } from "../../config/firebase";
import { FETCH_TODOS } from "./types";
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom'

// export const addToDo = newToDo => async dispatch => {
//   todosRef.push().set(newToDo);
// };

// export const completeToDo = completeToDoId => async dispatch => {
//   todosRef.child(completeToDoId).remove();
// };

export const fetchToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};
