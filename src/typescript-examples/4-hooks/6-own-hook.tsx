import React, { useState } from 'react';

/* WAY 1 - type what function return - tuple */
export const useToggle = (init: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(init);

  const toggleValue = () => setValue(!value);
  return [value, toggleValue];

  /* WAY 2 */
  // return [value, toggleValue] as const;
};

/* Useage */
function App() {
  const [isActive, toggleActive] = useToggle(false);
  return (
    <div>
      <p>Acive? {isActive}</p>
      <button onClick={toggleActive} type="button">
        Change
      </button>
    </div>
  );
}

export default App;
