import './App.css';
import React, { useState, useEffect } from 'react';




function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>This count is: {count}</h1>
      <button onclick={() => setCount(count + 1)}>increment</button>
      <button onclick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
}

export default App;
