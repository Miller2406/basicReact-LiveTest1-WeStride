import "./App.css";

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount(count + 1);
  };

  const decCount = () => {
    count >= 1 && setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Test Basic React 1</h1>
      <div className="count">{count < 10 ? "0" + count : count}</div>
      <div>
        <button onClick={incCount}>+</button>
        <button onClick={decCount}>-</button>
      </div>
    </div>
  );
}
