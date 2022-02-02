import React, { useEffect } from 'react';

/* There is not exactly typing of useEffect */
/* We need to remember that useEffect callback can return only void callback (substitute of componentWillUnmount) */

const Example = () => {
  useEffect(() => {
    // some logic, eg. data fetching
    // return false;  // error - we can return only function
    return () => {
      // unmount effect/clear listeners etc.
      // return true;  // error - (must be void)
    };
  }, []);

  return <div>useEffect example</div>;
};

export default Example;
