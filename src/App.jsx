import { flushSync } from "react-dom";
import "./styles.css";
import { useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { NewTodoItemList } from "./NewTodoItemList";
import { useEffect } from "react";


export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos)
, [todos] )})

    const toggleTodo =(id, completed) => {
        setTodos(currentTodos => {
          return currentTodos.map(todo => {
            if (todo.id === id) {
              return {...todo, completed}
            }
    
            return todo;
    
          })
        })
      }
    
      const addTodo = (title) => {
        setTodos((currentTodos) => {
          return[...currentTodos, {id: crypto.randomUUID(), title: title, completed: false}]
        });
      }
    
      const deleteTodo = (e, id) => {
        e.preventDefault();
    
        setTodos(todos.filter(todo => todo.id !== id))
        
      }
  
  return(
  <>
    <NewTodoForm addTodo={addTodo}/>
    <h1 className="header">ToDo List</h1>
    <NewTodoItemList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  </>
  )};