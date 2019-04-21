export const getDataToVisualize = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    console.log("in action: got firestore");
    const db = getFirestore();
    console.log("in action: got firestore");
    db.collection("projects").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        dispatch({ type: 'DATA_QUERY'});
    });
  }).catch((err) => {
  dispatch({ type: 'STATUS_CHANGE_ERROR'});
});
  }
};
