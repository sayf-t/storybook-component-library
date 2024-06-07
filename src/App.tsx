import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Counter: {count}</h1>
        <Button color='primary' onClick={() => setCount((count) => count + 1)}>Increment</Button>
      </div>
    </>
  )
}

export default App
