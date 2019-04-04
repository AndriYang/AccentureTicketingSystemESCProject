export const signIn = (credentials)  => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err});
    });
  }
}

export const adminsignIn = (credentials)  => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err});
    });
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS'});
    });
  }
}

export const changePassword = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    const user = firebase.auth().currentUser;

    const cred = firebase.auth.EmailAuthProvider.credential(user.email, credentials.password);

    user.reauthenticateAndRetrieveDataWithCredential(cred).then(() => {
      user.updatePassword(credentials.newPassword).then(() => {
        dispatch({ type: 'CHANGEPASSWORD_SUCCESS'});
      }).catch((error) => {
        dispatch({ type: 'CHANGEPASSWORD_ERROR'});
      });
    }).catch((error) => {
      dispatch({ type: 'CHANGEPASSWORD_ERROR'});
    });

  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((resp) => {
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        //get the first letter from firstName and lastName
        initials: newUser.firstName[0] + newUser.lastName[0]
      })
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS'})
    }).catch(err => {
      dispatch({ type: 'SIGNUP_ERROR', err})
    })
  }
}
