/*--------------  Question:1 --------------------*/
/*
import { useState } from 'react'
import './App.css'

function App() {

  // const [value, setValue] = useState(1);
  // const [multipliedValue, setMultiplied] = useState(null);
  // const handleClick = () => {
  //   setMultiplied(value * 5);
  //   setValue(value + 1);
  // }


  const [value, setValue] = useState(1);
  let multipliedValue = value * 5;
  const handleClick = () => {
    setValue(value + 1);
  }

  return (
    <>
      <h1>Main value: {value}</h1>
      <button onClick={handleClick}>click to multiply by 5</button>
      <h2>Multiplied valule: {multipliedValue}</h2>
    </>
  )
}

export default App
*/

/* ----------- Question:2 ------------ */
/*
import { useState } from 'react'
import './App.css'

function App() {
  console.log("App Rendered", Math.random());

  const [value, setValue] = useState(1);
  const [count, setCount] = useState({ value: 1 });

  const handleValueIncrement = () => {
    console.log("handleValueIncrement-Called:", Math.random());
    setValue(1);
    // setValue(5);
    // setValue(value+1);
  }
  const handleCountIncrement = () => {
    console.log("handleCountIncrement-Called:", Math.random());
    setCount({ value: 1 });
  }

  return (
    <>
      <h1>Value: {value}</h1>
      <h1>Counter Value: {count.value}</h1>
      <button onClick={handleValueIncrement}>Value Increment</button>
      <br /><br />
      <button onClick={handleCountIncrement}>Count Value Increment</button>
    </>
  )
}

export default App
*/
/* ----------- Question:3 ------------ */
import { useState } from 'react'
import './App.css'

function App() {
  console.log("App Rendered", Math.random());


  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    console.log("handleIncrement-Called:", Math.random());
    if (count < 10) {
      setCount(count + 1);
    }
  }
  const handleDecrement = () => {
    console.log("handleDecrement-Called:", Math.random());
    if (count > 1) {
      setCount(count - 1);
    }
  }
  const incrementByFive = () => {
    console.log("incrementByFive-Called:", Math.random());
    // setCount(count+5);

    //in this scenario count is not increment by 5
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <button onClick={handleIncrement}>Increment</button>
      &nbsp;&nbsp; {count} &nbsp;&nbsp;
      <button onClick={handleDecrement}>Decrement</button>
      <br /><br />
      <button onClick={incrementByFive}>Increment by: 5</button>

    </>
  )
}

export default App