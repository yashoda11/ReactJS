import React, {useState} from "react";
function App() {

  const [count, setCount] = useState(0);
  
  const incrementCounter = () => {
    setCount(count + 1);
  }
  const decrementCounter = () => {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <h1>Counter App</h1>
      <div className="count">{count}</div>
      <div className="buttons">
        <button className="button" onClick={incrementCounter}>+</button>
        <button className="button" onClick={decrementCounter}>-</button>
      </div>
    </div>
  );
}

export default App;
