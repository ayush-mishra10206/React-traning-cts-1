import { useCallback, useState } from "react"
import Todo from "./todo";




export default function UseCallback() {
    console.log('parent')
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])


    const increaseCount = () => {
        setCount((prevState) => prevState + 1);
    }

    const onClickAddToDo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);
    // const onClickAddToDo  = ()=>{
    //     setTodos((t) => [...t, "New Todo"]);
    // }


    return (
        <>
            <Todo todos={todos} onClickAddToDo={onClickAddToDo} />
            <div>
                count: {count}
                <button onClick={increaseCount}>add +</button>
            </div>
        </>
    )
}