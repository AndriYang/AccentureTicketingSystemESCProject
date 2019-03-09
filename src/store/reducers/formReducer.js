const initState = {

}

const formReducer = (state= initState, action) => {
  switch(action.type){

    case 'CREATE_FORM':
      console.log('created form', action.form);
      return state;

    case 'CREATE_FORM_ERROR':
      console.log('create project error', action.err);
      return state;

    default:
      return state;
  }
};

export default formReducer;
