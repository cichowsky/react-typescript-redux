/* eslint-disable react/button-has-type */
import React, { useReducer } from 'react';

/* State typing */
const initialState = { count: 0 };

interface ICounterState {
  count: number;
}

/* Actions typing */
interface IAddAction {
  type: 'add';
}

interface ISubtractAction {
  type: 'subtract';
}

interface ISetAction {
  type: 'set';
  value: number;
}

interface IResetAction {
  type: 'reset';
}

type CounterAction = IAddAction | ISubtractAction | ISetAction | IResetAction;

/* Create reducer */
function reducer(state: ICounterState, action: CounterAction): ICounterState {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 };
    case 'subtract':
      return { count: state.count - 1 };
    case 'set':
      return { count: action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

/* Useage in component */
const Counter = ({ count = initialState.count }: ICounterState) => {
  const [state, dispatch] = useReducer(reducer, { count });

  return (
    <>
      <div>Counter value: {state.count}</div>
      <button onClick={() => dispatch({ type: 'add' })}>+ 1</button>
      <button onClick={() => dispatch({ type: 'subtract' })}>- 1</button>
      <button onClick={() => dispatch({ type: 'set', value: 256 })}>Set 256</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset (0)</button>
    </>
  );
};

export default Counter;
