import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './Counter/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
       
        
        <Counter />
        
        
      </header>
    </div>
  )
}

export default App
