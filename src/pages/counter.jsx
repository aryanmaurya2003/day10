import React, { useState } from 'react'

function counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='counterClass'>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        </div>
    </div>
  )
}

export default counter