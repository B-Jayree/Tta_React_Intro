import React, {useState} from 'react'

export default function StateManagement() {
    const handleClick = () => {
        alert('You clicked the button')
    }
    const [count,setCount] = useState(0)
  return (
    <div className='state-management'>
        <div>
            <button onClick={handleClick}>Greeting</button>
        </div>
        <h1>Current Count : <strong>{count}</strong></h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}
