import { combineReducers } from "redux";
import categoryReducer from "./categoryReducers";
import loginReducers from "./loginReducers";

const rootReducer = combineReducers({
  category: categoryReducer,
  login: loginReducers
});

export default rootReducer;
