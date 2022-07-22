import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_TODO = 'ADD_TODO';

function addToDO(name) {
    return { type: ADD_TODO, payLoad: name }
}
function increment(name) {
    return { type: INCREMENT }
}

function decrement() {
    return { type: DECREMENT }
}



export default function Counter() {
    const reduxState = useSelector((state) => state)
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <p>Count:{reduxState.counter}</p>
        </div>
    )
}


// store.dispatch({ type: '' });
// store.dispatch(increment());
// store.dispatch(increment());