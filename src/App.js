import './App.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/counter';




function App() {
  //we want the count variable from the redux store 
  const { count } = useSelector((state) => state.counter);
  //in order to call redux action we need a dispatch hook to call any action from any reducers we want
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>This count is: {count}</h1>
      <button onclick={() => dispatch(increment())}>increment</button>
      <button onclick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;
