import { useState, useEffect } from 'react'
import './App.css'
import { useFetch, usePostTitle } from './hooks/useFetch';

function App() {

  const [currentPost, setCurrentPost] = useState(1);
  const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <br />
      </div>

      <div style={{ border: '1px solid white', padding: "10px", margin: "10px", borderRadius: "10px", fontSize: "20px" }}>
        <button onClick={() => setCurrentPost(1)}>1</button>
        <button onClick={() => setCurrentPost(2)}>2</button>
        <button onClick={() => setCurrentPost(3)}>3</button>
        <span style={{ fontWeight: "bold", fontSize: "20px" }}>Title: </span>{JSON.stringify(finalData)}
      </div>
    </>
  )
}

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

function Counter() {
  const { increaseCount, count } = useCounter()
  return <div>
    <button onClick={increaseCount}>Increase {count} </button>
  </div>
}

export default App
