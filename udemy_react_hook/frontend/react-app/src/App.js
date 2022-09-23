import React, { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  // useStateとは2つの要素を返す配列
    // count = useState(0)[0](初期値が与えられる)
    // setCount = useState(0)[1](function)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(prevCount => prevCount + 1)
  const decrement2 = () => setCount(prevCount => prevCount - 1)

  const reset = () => setCount(0)

  const double = () => setCount(prevCount => prevCount * 2)

  // const divide3 = () => setCount(count % 3 === 0 ? count / 3 : count )
  const divide3 = () => setCount(prevCount =>
    prevCount % 3 === 0 ? prevCount / 3 : prevCount
  )
  // const divide3 = () => setCount(prevCount => {
  //   if (prevCount % 3 === 0) {
  //     return prevCount / 3
  //   } else {
  //     return prevCount
  //   }})

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>x2</button>
        <button onClick={divide3}>/3</button>
      </div>
    </>
  );
}

export default App;
