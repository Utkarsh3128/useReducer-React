import { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  // A reducer is a pure function that specifies how the state should be updated in response to actions.
  // It takes the current state and an action as input and returns a new state.
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <>
      <h3>Simple counter app using useReducer hook</h3>
      <button onClick={decrement}>-</button>
      <h1>{state.count}</h1>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
