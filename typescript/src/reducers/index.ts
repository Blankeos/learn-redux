import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import userReducer from "./user";

const reducers = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
  user: userReducer,
});

export default reducers;
