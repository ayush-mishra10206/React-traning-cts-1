import { useState } from "react";



export default function Parent(){
    const[words, setWords] = useState("");

    const toggleClick = () =>{
        setWords("words in child component")
    }

    const childToParent = ()=>{
        setWords("data from child component")
    }

    return (
        <div>
            <h1>Parent</h1>
            <button data-testid="parentBtn" onClick={toggleClick}>Ask</button>
            <Child childToParent={childToParent} hears={words}/>
        </div>
    );
}

function Child(props){
    return (
        <div>
            <h2>Child</h2>
            <p data-testid="childmessage">{props.hears}</p>
            <button  onClick={props.childToParent} >reply</button>
        </div>
    )
}