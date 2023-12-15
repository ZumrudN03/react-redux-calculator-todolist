import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { calculatorNum, answer } from "./calculatorSlice";
import './calculator.css'

function Calculator() {
  const answer = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();
  const [inpVal, setInpVal] = useState("");
  const [inpVal2, setInpVal2] = useState("");

  return (
    <div className="calculator-container">
      <input
        className="calculator-input"
        type="text"
        value={inpVal}
        onChange={(e) => setInpVal(e.target.value)}
      />
      <input
        className="calculator-input"
        type="text"
        value={inpVal2}
        onChange={(e) => setInpVal2(e.target.value)}
      />
      <div className="calculator-buttons">
        <button
          className="calculator-button"
          onClick={() => {
            dispatch(calculatorNum({ num1: +inpVal, num2: +inpVal2, oper: '+' }));
          }}
        >
          +
        </button>
        <button
          className="calculator-button"
          onClick={() => {
            dispatch(calculatorNum({ num1: +inpVal, num2: +inpVal2, oper: '-' }));
          }}
        >
          -
        </button>
        <button
          className="calculator-button"
          onClick={() => {
            dispatch(calculatorNum({ num1: +inpVal, num2: +inpVal2, oper: '*' }));
          }}
        >
          x
        </button>
        <button
          className="calculator-button"
          onClick={() => {
            dispatch(calculatorNum({ num1: +inpVal, num2: +inpVal2, oper: '/' }));
          }}
        >
          /
        </button>
      </div>
      <span className="calculator-result">= {answer}</span>
    </div>
  );
}

export default Calculator;
