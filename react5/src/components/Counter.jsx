import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  multiplyBy2,
  divideBy2,
} from "../reducers/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(multiplyBy2())}
        >
          multiplyBy2
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(divideBy2())}
        >
          divideBy2
        </button>
      </div>
    </div>
  );
}
