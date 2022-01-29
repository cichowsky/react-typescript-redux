import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from 'state';
import './App.css';

const App = () => {
  const counterValue = useSelector((state: State) => state.counter);
  const dispatch = useDispatch();
  const { add, reset, subtract } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <div>Counter value: {counterValue}</div>
      <button type="button" onClick={() => add(1)}>
        + 1
      </button>
      <button type="button" onClick={() => subtract(1)}>
        - 1
      </button>
      <button type="button" onClick={() => reset()}>
        Reset counter
      </button>
    </div>
  );
};

export default App;
