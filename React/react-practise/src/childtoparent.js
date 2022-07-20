import { useState } from "react";



export default function Parent1() {
    const [message, setMessage] = useState('');
    const onClickRequest = (request) => {
        if (request.includes("car")) {
           setMessage("set by child")
        }
    };

    return (
        <div data-testid="parent">
            <h1>Parent1</h1>
            <p data-testid="message">{message}</p>
            <Child1 onRequest={onClickRequest}></Child1>
        </div>
    );
}

function Child1(props) {
    const handleClick = () => {
        props.onRequest("can i have car")
    }
    return (
        <div>
            <h2>child1</h2>
            <button data-testid="childBtn" onClick={handleClick}>Ask for the car</button>
        </div>
    )
}