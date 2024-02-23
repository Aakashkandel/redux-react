import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement } from './redux/slices/counter/index';

function App() {

  const count = useSelector((state) => state.counter.value);

  const dispatch=useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <h1>This is counter {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;
