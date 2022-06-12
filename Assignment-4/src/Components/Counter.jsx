import React from "react";
import { useState } from "react";

const Counter = ({value}) => {
  const [counter, setCounter] = useState(value);
  const handleCounter = (value) => {
    setCounter(value);
  };

  return (
    <>
      <div className="heading">
      <h2>COUNTER :</h2>
      <h1> {counter}</h1>
      </div>
      <div className="buttons">
      <button
        onClick={() => {
          handleCounter(counter+1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          handleCounter(counter-1);
        }}
      >
        Subtract
      </button>
      <button
        onClick={() => {
          handleCounter(counter*2);
        }}
      >
        Double
      </button>
      </div>
    </>
  );
};


export default Counter;