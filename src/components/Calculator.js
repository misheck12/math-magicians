import React, { useState } from 'react';
import '../index.css';
import Buttons from './Buttons';
import Output from './Output';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const clickHandler = (event) => {
    setState({ ...state, ...calculate(state, event) });
  };

  return (
    <div className="calculator-page">
      <h3>Let&#39;s do some math!</h3>
      <div className="calculator-grid">
        <Output
          total={state.total}
          operation={state.operation}
          next={state.next}
        />
        <Buttons
          clickHandler={clickHandler}
        />
      </div>
    </div>

  );
};

export default Calculator;
