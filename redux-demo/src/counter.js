import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { bindActionCreators, createStore } from "redux";
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_TODO = 'ADD_TODO';

function increment(name) {
    return { type: ADD_TODO, payLoad: name }
}

function decrement() {
    return { type: DECREMENT }
}



export default function Counter() {
const reduxState = useSelector((state)=>state)
const dispatch = useDispatch();
    return (
        <div>
            {/* <button onClick={() => store.dispatch(increment(name))}>Increment</button> */}
            {/* <button onClick={() => store.dispatch(decrement())}>Decrement</button> */}
            <p>Count:{reduxState.counter}</p>
        </div>
    )
}


// store.dispatch({ type: '' });
// store.dispatch(increment());
// store.dispatch(increment());