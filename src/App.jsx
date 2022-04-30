import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './Counter/Counter'
import TodoContainer from './Todo/components/TodoContainer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
       
        
        {/* <Counter />
         */}
         <TodoContainer />
        
        
      </header>
    </div>
  )
}

export default App
