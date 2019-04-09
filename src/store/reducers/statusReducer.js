const initState = {
}

const statusReducer = (state = initState, action) => {
  switch (action.type) {
    case 'STATUS_CHANGE':
      console.log('status solved', action.project);
      return state;
    case 'STATUS_CHANGE_ERROR':
      console.log('status solved error', action.err);
      return state;
    default:
      return state;
  }
}

export default statusReducer
