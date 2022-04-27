import React from 'react'
import { increment,decrement,incrementByAmount,decrementByAmount,incrementAsync } from './CounterSlice'
import { useSelector,useDispatch } from 'react-redux'


const Counter = () => {
    const [amount,setAmount] = React.useState(1);
    const counter = useSelector(state=>state.counter);
    
    const dispatch = useDispatch();
  return (
    <div>
      
      <p style={{color:"white",fontSize:"30px"}}>{counter.value}</p>
      <div>
          <button onClick={e=>dispatch(increment())}>Increment</button> {" "}
          <button onClick={e=>dispatch(decrement())}>Decrement</button>
          <p>Increment/Decrement By Some Amount</p>
          <input type="number" value={amount} onChange={e=>setAmount(e.target.value)} />
          <button onClick={e=>dispatch(incrementByAmount(parseInt(amount)))}>IncrementBy {amount}</button> {" "}
          <button onClick={e=>dispatch(decrementByAmount(parseInt(amount)))}>DecrementBy {amount}</button>
          <p>Increment By Async Task</p>
          <button onClick={e=>dispatch(incrementAsync(parseInt(amount)))} disabled={counter.loading}>
            {counter.loading?"processing":"Increment Async"}
          </button>
      </div>
    </div>
  )
}

export default Counter
