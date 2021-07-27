import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./actions/index";
import { RootStore } from "./store";

const App: React.FC = () => {
  // Get the values from the state using useSelector
  const counter = useSelector((state: RootStore) => state.counter);
  const isLogged = useSelector((state: RootStore) => state.isLogged);
  const data = useSelector((state: RootStore) => state.user);
  const [incrementValue, setIncrementValue] = useState(1);

  // Binding the dispatch to our actions
  const dispatch = useDispatch();
  const { decrement, increment, signIn, getUserAsync } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div style={{ textAlign: "center" }}>
      <header>
        <h2>Increment By: {incrementValue}</h2>
        <button onClick={() => setIncrementValue((prev) => prev + 1)}>^</button>
        <button onClick={() => setIncrementValue((prev) => prev - 1)}>v</button>
        <h1>Counter: {counter}</h1>
        <button onClick={() => decrement(incrementValue)}>- Decrement</button>
        <button onClick={() => increment(incrementValue)}>Increment +</button>

        {isLogged ? (
          <h3>You are currently logged in</h3>
        ) : (
          <h3>You are currently logged out</h3>
        )}

        <button onClick={() => signIn()}>
          {isLogged ? "Logout" : "Login"}
        </button>

        <h1>Test Async Calls</h1>
        <button onClick={() => getUserAsync()}>Get User Async</button>

        <div>
          {data.loading ? (
            <h1>Loading...</h1>
          ) : (
            !!data.user && (
              <div style={{ marginTop: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    style={{
                      objectFit: "contain",
                      marginRight: "1rem",
                      borderRadius: "100%",
                    }}
                    src={data.user.picture.large}
                    alt={data.user.picture.large}
                  />

                  <div>
                    <h3>
                      {data.user.name.title} {data.user.name.first}{" "}
                      {data.user.name.last}
                    </h3>
                    <h5>{data.user.email}</h5>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </header>
    </div>
  );
};

export default App;
