import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn } from "./actions";

function App() {
  // Get the values from the state using useSelector
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  // Changing the state by dispatching actions with useDispatch
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header>
        <h1>Counter: {counter}</h1>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          - Decrement
        </button>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment +
        </button>

        {isLogged ? (
          <h3>Wow you are logged in</h3>
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
