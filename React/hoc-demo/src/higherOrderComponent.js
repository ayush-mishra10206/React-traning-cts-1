import { useState } from "react";



export default function HigherOrderComponent(Component){
    function Enhanced(props){
        const [counter, setCounter] = useState(0);

        const handleClick = () =>{
            setCounter(counter + 1);
        }

        return <Component handleClick={handleClick} counter={counter} />
    }
    return Enhanced
}