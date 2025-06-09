import { useRef, useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch';
import { usePrev } from './hooks/usePrev';

function useDebounce(originalFn) {
  const currentClock = useRef();

  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(originalFn, 200);
  }

  return fn
}


function App() {

  function sendDataToBackend() {
    fetch("api.amazon.com/search/")
  }

  const debouncedFn = useDebounce(sendDataToBackend);

  const [currentPost, setCurrentPost] = useState(1);
  const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

  const [state, setState] = useState(0);
  const prev = usePrev(state);

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
      <br />
      <br />
      <br />

      <div>
        <p>{state}</p>
        <button onClick={() => {
          setState((curr) => curr + 1);
        }}>
          Click Me
        </button>
        <p>The previous value was {prev}</p>
      </div>

      <br />
      <input type='text' onChange={debouncedFn} />
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
