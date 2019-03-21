const initState = {

}

const replyReducer = (state= initState, action) => {
  switch(action.type){

    case 'REPLY_CREATED':
      console.log('created reply', action.reply);
      return state;

    case 'REPLY_ERROR':
      console.log('create reply error', action.err);
      return state;

    default:
      return state;
  }
};

export default replyReducer;
