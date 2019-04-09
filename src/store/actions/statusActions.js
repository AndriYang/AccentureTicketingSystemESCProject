export const changeStatus = (status) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    console.log("in action: got status ")
    //const profile = getState().firebase.profile;
    // const authorId = getState().firebase.auth.uid;
    const caseId = getState().id;
    console.log("hi " +caseId);
    var doc = firestore.collection("projects").doc(status.id);
    doc.set({
      ...status,
      solveStatus: "solved"}).then(()=>{
        dispatch({ type: 'STATUS_CHANGE', status });
      }).catch((err) => {
      dispatch({ type: 'STATUS_CHANGE_ERROR', err});
    })

  }
};
