import { useState } from 'react'
import './App.css'

function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1)
  }

  return {
    count: count,
    increaseCount: increaseCount
  }
}
function App() {

  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

function Counter() {
  const { increaseCount, count } = useCounter()
  return <div>
    <button onClick={increaseCount}>Increase {count} </button>
  </div>
}

export default App
