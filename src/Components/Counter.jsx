import { useContext } from "react";
import React from "react";
import { CounterContext } from "../context/Counter";

const Counter = () => {
  const counterContext = useContext(CounterContext);
  return (
    <div className="button">
      <button
        className="btn"
        onClick={() => counterContext.setCount(counterContext.count + 1)}
      >
        Increment
      </button>
      <button
        className="btn"
        onClick={() => counterContext.setCount(counterContext.count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};
export default Counter;
