import React, { useState } from 'react'

function App() {

  // let count = 1;
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    console.log("handleIncrement called");
    // count = count + 1;
    // console.log("count: ", count);

    /*---Increment by 1---*/

    // setCount(count + 1);
    /* ----or-----*/
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    /*----increment by 4-----*/

    // setCount(count+4);
    /* ----or-----*/
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  const handleDecrement = () => {
    console.log("handleDecrement called");
    // count = count - 1;
    // console.log("count: ", count);
    setCount(count - 1);
  }

  const handleReset = () => {
    setCount(1);
  }

  return (
    <div>
      <button type="button" onClick={handleIncrement}>Increment</button>
      &nbsp;&nbsp;
      <span>{count}</span>
      &nbsp;&nbsp;
      <button type="button" onClick={handleDecrement}>Decrement</button>
      &nbsp;&nbsp;
      <button type="button" onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App