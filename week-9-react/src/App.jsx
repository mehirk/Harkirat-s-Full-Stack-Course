import { useState , useEffect } from "react";

function App() {
  return <div>
      <b>
        hi there
      </b>
      <Counter />
    </div>
}
// mounting, re-rendering, unmounting
function Counter() {
  // let initialValue = 5
  const [count, setCount] = useState(0);

  // since just doing it like this will cause an infinite loop, we need to use useEffect
  // and hook into the lifecycle events of the react. 
  console.log("counter");

  // guard our setInterval from re-rendering again and again.
  useEffect(function () {
    setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
    console.log("mounted");
  }, []);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }


  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
    <button onClick={decreaseCount}>Decrease count</button>
    <button onClick={resetCount}>Reset count</button>
  </div>
}

export default App
