import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 5;

  const addValue = () => {
    // counter = counter + 1;
    console.log(counter);
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React Course</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  );
}

export default App;
