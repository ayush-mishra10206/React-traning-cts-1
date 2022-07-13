import React, { useState } from "react";
import './counter.css';
const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const decrementCounter = () => {
        setCounter((prevCounter) => prevCounter - 1);
    };

    const resetCounter = ()=>{
        setCounter(0);
    }

    return (
        <div>
            <p className="header">COUNTER</p>
            <button data-testid="increment" onClick={incrementCounter}>
                +
            </button>
            <p data-testid="counter">{counter}</p>
            <button  data-testid="decrement"  onClick={decrementCounter}>
                -
            </button>
            <button className="resetBtn" data-testid="reset" onClick={resetCounter}>Reset</button>
        </div>
    );
};

export default Counter;