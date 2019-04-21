const initState = {
}

const visualizeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DATA_QUERY':
      console.log('data got', action.project);
      return state;
    case 'DATA_QUERY_ERROR':
      console.log('status solved error', action.err);
      return state;
    default:
      return state;
  }
}

export default visualizeReducer
