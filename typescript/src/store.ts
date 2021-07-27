import { applyMiddleware, createStore } from "redux";
import allReducers from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Added redux-thunk middlware to be able to make asyncronous calls in our actions
const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

// This enables types for useSelector() hook
export type RootStore = ReturnType<typeof allReducers>;
export default store;
