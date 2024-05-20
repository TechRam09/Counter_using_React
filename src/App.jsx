import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [count, setCount] = useState(5)
  
  const addValue = () => {
    if (count < 20) {
      setCount(count+1)
    }
  }

  const removeValue = () => {
    if (count > 0) {
      
      setCount(count-1)
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Count Value:{count}</h2>
      <button onClick={addValue}>Add Value</button><br></br>
      <button onClick={removeValue}>Remove value</button>
      <p>Count Value:{ count}</p>
    </>
  )
}

export default App
