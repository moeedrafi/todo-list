import React, { useState } from 'react'

const Form = ({ inputText, setInputText, todos, setTodos }) => {

    const [filteredTodos, setFilteredTodos] = useState([]);

    const allTodo = () => {
        setFilteredTodos(todos)
    }

    const completedTodo = () => {
        setFilteredTodos(todos.filter(todo => todo.completed === true))
    }

    const importantTodo = () => {
        setFilteredTodos(todos.filter(todo => todo.important === true))
    }

    const inputHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, important: false, edit: false, id: Math.random()*1000}
        ])
        setInputText('');
    }


  return (
    <div>
        <input onChange={inputHandler} value={inputText} placeholder='text' />
        <button onClick={submitHandler}>+</button>
        <button onClick={allTodo}>All</button>
        <button onClick={completedTodo}>Completed</button>
        <button onClick={importantTodo}>Important</button>
    </div>
  )
}

export default Form