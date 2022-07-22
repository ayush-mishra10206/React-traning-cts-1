import { useState } from "react";

 

 export default function Todos() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Todo 1",
            complete: false,
          },
          {
            id: 2,
            title: "Todo 2",
            complete: false,
          },
        ]);
  
    const handleComplete = (todo) => {
      console.log('todo : ', todo)
      let initialTodos =  todos.map((initTodo) => {
        if (todo.id === initTodo.id) {
          return { ...initTodo, complete: !initTodo.complete };
        } else {
          return initTodo;
        }
      });
      setTodos(initialTodos)
    };
  
    return (
      <>
        {todos.map((todo) => (
          <div key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
              />
              {todo.title}
            </label>
          </div>
        ))}
      </>
    );
  }