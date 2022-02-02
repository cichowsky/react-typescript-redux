import React, { useState } from 'react';

/* We are typing state value */
// const [state, setState] = useState<StateType>(initialState), eg.
// StateType examples: <number | string> , <IState> or nothing (if state is simple - type inference)

const Counter = () => {
  const [counter, setCounter] = useState(0); // TS type inference (number)

  return (
    <>
      <p>Counter value: {counter}</p>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        +1
      </button>
    </>
  );
};
export default Counter;
