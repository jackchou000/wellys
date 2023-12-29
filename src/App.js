import React, { useState } from "react";
import Button from "../src/Button";



function App() {
  const [count, setCount] = useState(0);



  let incrementCount = () => {
    setCount(count + 1);
  };


  let decrementCount = () => {
    setCount(count - 1);
  };




  return (
    <div className="app">
        <p>Count: {count}</p>
        <div className="buttons">
          <Button title={"-"} action={decrementCount} />
          <Button title={"+"} action={incrementCount} />
        </div>
      </div>
  );
}


export default App;