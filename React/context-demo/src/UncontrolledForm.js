import React from "react";


export default function UncontrolledForm(){
    const inputRef = React.useRef({name:'abc', lastName:'gadfa'});

    const onSubmit = (event) =>{
        event.preventDefault();
        console.log('ref current : ', inputRef)
        console.log('ref value : ', inputRef.current.value)
    }

    return <form onSubmit={onSubmit}>
        <input type="text" ref={inputRef} value={inputRef.name}/>
        <input type="text" ref={inputRef}/>
        <button>sbt</button>
    </form>
}