import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn } from "./actions";
import { useState } from "react";

function App() {
  // Get the values from the state using useSelector
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const [incrementValue, setIncrementValue] = useState(1);

  // Changing the state by dispatching actions with useDispatch
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header>
        <h2>Increment By: {incrementValue}</h2>
        <button
          onClick={() => {
            setIncrementValue((prev) => prev + 1);
          }}
        >
          ^
        </button>
        <button
          onClick={() => {
            setIncrementValue((prev) => prev - 1);
          }}
        >
          v
        </button>
        <h1>Counter: {counter}</h1>
        <button
          onClick={() => {
            dispatch(decrement(incrementValue));
          }}
        >
          - Decrement
        </button>
        <button
          onClick={() => {
            dispatch(increment(incrementValue));
          }}
        >
          Increment +
        </button>

        {isLogged ? (
          <h3>You are currently logged in</h3>
        ) : (
          <h3>You are currently logged out</h3>
        )}

        <button
          onClick={() => {
            dispatch(signIn());
          }}
        >
          {isLogged ? "Logout" : "Login"}
        </button>
      </header>
    </div>
  );
}

export default App;
