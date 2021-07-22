# A repo for learning redux

## 📝 My Notes:

1. BASIC REDUX IMPLEMENTATION WITHOUT react-redux

```jsx
// Store, Actions, Reducers, Dispatch

// 1. Define the actions
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

// 2. Define our reducer (the one that will process the action)
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

// 3. Create the store and use the reducer in it.
let counterStore = createStore(counterReducer);

// Optional Step: Subscribe a handler on the event that the state changes.
counterStore.subscribe(() => console.log(counterStore.getState()));

// 4. Dispatch actions to the store.
counterStore.dispatch(increment());
counterStore.dispatch(increment());
counterStore.dispatch(increment());
counterStore.dispatch(increment());
```
