import React, { useReducer, useState } from 'react'

export default function Usestate() {
    const [count, setCount] = useState(0);


    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                 console.log("the value is incremented");
                return state + 1;
            case 'decrement':
                console.log("the value is decremented");
                return state - 1
                
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, count);


    return (
        <div>
            <p>Count: {state}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>

        </div>
    )
}
