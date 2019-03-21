export const createReply = (reply) => {
  return(dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();
    firestore.collection('reply').add({
      ...reply,
      createdAt:new Date()
    }).then(() => {
      dispatch({type: 'REPLY_CREATED', reply});
    }).catch((err) => {
      dispatch({type: 'REPLY_ERROR', err});
    })

  }
};
