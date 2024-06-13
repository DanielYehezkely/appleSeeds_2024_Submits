import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

const CounterComponent = ({ id }) => {
  const [initialValue, setInitialValue] = useState(0);
  const { value, addOne, removeOne, double, divide } = useCounter(initialValue);

  return (
    <div className="sub-container">
      <h1>{`Component ${id}`}</h1>
      <input
        type="number"
        value={initialValue}
        onChange={(e) => setInitialValue(Number(e.target.value))} 
        placeholder="Set initial value"
      />
      <div>Counter Value: {value}</div>
      <button onClick={addOne}>Increment</button>
      <button onClick={removeOne}>Decrement</button>
      <button onClick={double}>Double</button>
      <button onClick={divide}>Divide</button>
    </div>
  );
};

export default CounterComponent;