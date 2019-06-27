import { ON_LOGIN ,GET_USER} from "../actionTypes/actionTypes";

const initialState = {
  user: null
};

let newState;

const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case ON_LOGIN:
     
      newState = Object.assign({}, state);
      if (action.user) {
        let user = action.user;
        user.status = "SUCCESS";
        newState.isLogedin=true

        newState.user = action.user;
      } else newState.user = { status: "FAILED" };
      return newState;
      case GET_USER:
      return state
    default:
      return state;
  }
};

export default loginReducers;
