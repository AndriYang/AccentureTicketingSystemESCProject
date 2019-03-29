import { FETCH_TODOS } from "../newtodoactions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};
