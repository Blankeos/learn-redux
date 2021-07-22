# A repo for learning redux

## 📝 My Notes:

1. Basic Implementation of redux

```jsx
// Main four working parts of redux: Store, Actions, Reducers, Dispatch

// 1. Define the "actions"
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// 2. Define our "reducer" (the one that will process the action)
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

// 3. Create the "store" and use the "reducer" in it.
let counterStore = createStore(counterReducer);

// Optional Step: Subscribe a handler on the event that the state changes.
counterStore.subscribe(() => console.log(counterStore.getState()));

// 4. "Dispatch" actions to the store.
counterStore.dispatch(increment());
counterStore.dispatch(increment());
counterStore.dispatch(increment());
counterStore.dispatch(increment());
```

2. Using React DevTools

Install the [chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) and add this line of code to when you create your store.

```js
let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

3. Combining two reducers into one store.

You can't put two separate reducers to the same store. You need to use `combineReducers` to do this

```js
import { combineReducers } from "redux";

const allReducers = combineReducers({
  reducer1: reducer1, // use your first reducer here
  reducer2: reducer2, // use another reducer here
});

// then we you create your store, just use allReducers as if you're using one.
let store = createStore(allReducers);
```

4. Using redux with react with react-redux and the `<Provider />` component

```js
// Import the Provider
import { Provider } from "react-redux";
import { createStore } from "redux";

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Finally in the index.js just wrap the Provider around the App.
// Also make sure to pass in the created store in the store prop of the Provider component
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

In the case of NextJS, just find where the app component is being rendered and wrap the Provider with the store there.

5. Reading the value of a state with react-redux and the `useSelector` hook.

```js
// Import useSelector
import { useSelector } from "react-redux";

const AnyComponentHere = () => {
  // Get the values from the state using useSelector
  const stateValue = useSelector((state) => state.reducerNameHere); // replace reducerNameHere with the reducer you specified when combining the reducers.
};

// stateValue now represents a state so you can render it or use it like any state in React.
```

6. Manipulating the value of the state with react-redux and the `useDispatch` hook.

Before you manipulate any values, make sure you have defined your actions already, preferably in their own separate files so you can import them to any component easily.

```js
// import useDispatch
import { useDispatch } from "react-redux;

// import the action you want to make use of
import { actionHere } from "../actions"; //  just an example if you put it in an /actions folder.

const AnyComponentHere = () => {
  // Initialize the useDispatch hook
  const dispatch = useDispatch(); // notice how it's almost like any hook in react.

  // Make changes with it
  dispatch((actionHere()));
}
```

## 🤩🙌 That's pretty much what I learned so far with Redux. Yay! 🎉🎉
