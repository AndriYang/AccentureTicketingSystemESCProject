import authReducer from './authReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import dataReducer from './dataReducer'
import formReducer from './formReducer'
import replyReducer from './replyReducer'
import ticketReducer from './ticketReducer'
import statusReducer from './statusReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  data: dataReducer,
  form: formReducer,
  reply: replyReducer,
  ticket: ticketReducer,
  status: statusReducer
});

export default rootReducer
