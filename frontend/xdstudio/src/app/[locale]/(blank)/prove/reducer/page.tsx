"use client";
import { useReducer } from "react";

interface StateType {
  count: number;
  text: string;
}

type ActionType =
  | { type: "incremented_age"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "reset" };
function reducer(state: StateType, action: ActionType) {
  if (action.type === "incremented_age") {
    return {
      count: state.count + 1,
      text: `${action.payload + state.count + (state.count + 1)}`,
    };
  }
  throw Error("Unknown action.");
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 42, text: "test" });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "incremented_age", payload: 5 });
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state.count}.</p> <p>Hello! You are {state.text}.</p>
    </>
  );
}
