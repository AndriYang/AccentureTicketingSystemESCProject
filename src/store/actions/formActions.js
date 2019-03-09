export const createForm = (form) => {
  return(dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();
    firestore.collection('form').add({
      ...form,
      createdAt:new Date()
    }).then(() => {
      dispatch({type: 'CREATE_FORM', form});
    }).catch((err) => {
      dispatch({type: 'CREATE_FORM_ERROR', err});
    })

  }
};
