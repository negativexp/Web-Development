import React, { useState, useRef, useEffect } from "react";
//import { uuid } from "uuidv4";
import TodoList from "./TodoList";

const LOCAL_STORAGE_KEY = "todoApp.todos"

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e) {
    var name = todoNameRef.current.value
    setTodos(prevTodos => {
      return [...prevTodos, {id: prevTodos.length+1, name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  return(
    <>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add</button>
      <button>Clear</button>
      <br/><div>Total: 0</div>
    </>
  )
}

export default App;
