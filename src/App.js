import React, { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'

const App = () => {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Form 
        inputText={inputText} setInputText={setInputText}
        todos={todos} setTodos={setTodos}
      />
      <TodoList 
        inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}
      />
    </div>
  )
}

export default App