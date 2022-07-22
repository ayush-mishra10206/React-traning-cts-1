import { memo } from "react";
import Todos from "./useState";




function ToDo ({todos, onClickAddToDo}){
    console.log('child')
    return(
        <>
        <h3>ToDo</h3>
        {
            todos.map((todo, index)=>{
                return <p key={index}>{todo}</p>;
            })
        }
        <button onClick={onClickAddToDo}>Add ToDo</button>
        </>
    )
}

export default memo(ToDo)