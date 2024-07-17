import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos}) => {
  return (
    <div>
        <ul>
            {todos.map((todo) => <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>)}
        </ul>
    </div>
  )
}

export default TodoList