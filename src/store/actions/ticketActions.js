export const createTicket = (ticket) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    //const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...ticket,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', ticket });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err});
    })

  }
};
