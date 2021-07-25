# Adding Typescript support for Redux

## 📝 My Notes

- Adding types may be very exhausting but will incrementally pay off as your project gets larger and start collaborating with other develoepers. Types in a way serve as documentation.

### 1. Adding Types to Actions

First create a file to store the dispatch types. Ill call it `CounterActionTypes.ts`

```jsx
// These two will define the action type
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// Define the dispatch object on an `INCREMENT` type
export interface IncrementCounter {
  type: typeof INCREMENT;
  payload: number;
}

// Define the dispatch object on a `DECREMENT` type
export interface DecrementCounter {
  type: typeof DECREMENT;
  payload: number;
}

// This will be the dispatch options in our counterAction
export type CounterDispatchTypes = IncrementCounter | DecrementCounter;
```

Now we can add types to our increment and decrement actions

```jsx
import { Dispatch } from "redux";
import {
  CounterDispatchTypes,
  INCREMENT,
  DECREMENT,
} from "./CounterActionTypes";

export const increment =
  (byNumber: number) => (dispatch: Dispatch<CounterDispatchTypes>) => {
    dispatch({
      // We can also define type to a string 'INCREMENT' but this is best practice
      // as the value of the type INCREMENT may change. This way, we only change it in one place
      type: INCREMENT,
      payload: byNumber,
    });
  };

export const decrement =
  (byNumber: number) => (dispatch: Dispatch<CounterDispatchTypes>) => {
    dispatch({
      type: DECREMENT,
      payload: byNumber,
    });
  };
```

### 2. Adding Types to Reducers

This is pretty straight forward as we would just import from our `CounterActionTypes.ts`

```jsx
import {
  CounterDispatchTypes,
  DECREMENT,
  INCREMENT,
} from "./CounterActionTypes";

// Here we define the type for our defaultState and return type
type DefaultStateI = number;

// Extracting this would be a good idea especially when the state is a large object
const defaultState: DefaultStateI = 0;

const counterReducer = (
  state: DefaultStateI = defaultState,
  action: CounterDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case INCREMENT:
      return state + (action.payload ? action.payload : 1);
    case DECREMENT:
      return state - (action.payload ? action.payload : 1);
    default:
      return state;
  }
};

export default counterReducer;
```

### 3. Adding Types to our Store

I included a middleware for a package called `redux-thunk`. This just enables asynchronous calls in our dispatch actions

```jsx
import { applyMiddleware, createStore } from "redux";
import allReducers from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Added redux-thunk middlware to be able to make asynchronous calls in our actions
const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

// This enables types for useSelector() hook
export type RootStore = ReturnType<typeof allReducers>;
export default store;
```

### 4. Finally, adding types on useSelector

```jsx
// RootStore is exported from our Store
const counter = useSelector((state: RootStore) => state.counter);

// It is also a good practice to bind our actions with bindActionCreators
// now we can directly call decrement and increment functions in our UI without the dispatch keyword
const dispatch = useDispatch();
const { decrement, increment } = bindActionCreators(actionCreators, dispatch);
```
