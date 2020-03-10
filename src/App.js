import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      Counter: {counter}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h3>Secret</h3> : "" }
    </div>
  );
}

export default App;
