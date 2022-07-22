import React, { useState } from 'react'

import { bindActionCreators, createStore } from "redux";
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_TODO = 'ADD_TODO';

function increment(name) {
    return { type: ADD_TODO, payLoad: name }
}

function decrement() {
    return { type: DECREMENT }
}

function reducer(state = { counter: 10 }, action) {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, data: action.payLoad }
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}


export default function LogState() {
    const [name, setName] = useState('gasjkdb');
    return (
        <div>
            <input onChange={(event) => setName(event.target.value)}></input>
            <button onClick={() => store.dispatch(increment(name))}>Increment</button>
            <button onClick={() => store.dispatch(decrement())}>Decrement</button>
        </div>
    )
}

var store = createStore(reducer, enableDevTools());

function enableDevTools() {
    return (
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
store.subscribe(LogState);

// store.dispatch({ type: '' });
// store.dispatch(increment());
// store.dispatch(increment());