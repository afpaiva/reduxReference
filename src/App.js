import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  logInOut
 } from './actions';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      {isLogged ?
        <h3>Valuable information</h3>
      :
        <h3>Logged out</h3>
      }
      <button onClick={()=> dispatch(increment)}>+</button>
      <button onClick={()=> dispatch(decrement)}>-</button>
      <button onClick={()=> dispatch(logInOut)}>
      {isLogged ? <>Log out</>: <>Log in</>}
      </button>
    </div>
  );
}

export default App;
