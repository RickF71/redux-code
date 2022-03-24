import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import {increment} from './action/CounterAction';
import {decrement} from './action/CounterAction';
import {useDispatch} from 'react-redux';



function App() {
  console.log('Inside UI');
  const counter = useSelector(state=>state);
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
