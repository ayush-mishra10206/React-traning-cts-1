import axios from "axios";
import React, { useEffect, useState } from "react"



const ToDoList = () => {
    const [todoList, setTodoList] = useState(null);

    useEffect(() => {
        (async () => {
            const getTodo = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setTodoList(getTodo.data)
        })()
    }, []);

    return todoList ? (<ul>
        {
            todoList.map((todo, index) => {
               return <li key={index} data-testid='todo'>{todo.title}</li>
            })
        }
    </ul>)
        : (<p>loading...</p>);

}
export default ToDoList