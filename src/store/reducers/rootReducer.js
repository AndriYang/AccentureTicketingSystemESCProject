import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import dataReducer from './dataReducer'
import formReducer from './formReducer'
import replyReducer from './replyReducer'
import ticketReducer from './ticketReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  data: dataReducer,
  form: formReducer,
  reply: replyReducer,
  ticket: ticketReducer
});

export default rootReducer
