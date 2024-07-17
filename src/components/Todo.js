import React, {useEffect} from 'react';

const Todo = ({ todo, todos, setTodos }) => {
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };


  const reorderTodos = () => {
    const importantTodos = todos.filter((todo) => todo.important);
    const normalTodos = todos.filter((todo) => !todo.important);
    const orderedTodos = [...importantTodos, ...normalTodos];
    setTodos(orderedTodos);
  };

  const impHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            important: !item.important,
          };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    reorderTodos();
  }, [impHandler]);

  const editHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            edit: !item.edit,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      {todo.edit ? (
        <div>
          <input
            value={todo.text}
            onChange={(e) =>
              setTodos(
                todos.map((item) => {
                  if (item.id === todo.id) {
                    return {
                      ...item,
                      text: e.target.value,
                    };
                  }
                  return item;
                })
              )
            }
          />
          <button onClick={editHandler}>Save</button>
        </div>
      ) : (
        <div>
          <li>{todo.text}</li>
          <button onClick={completeHandler}>completed</button>
          <button onClick={editHandler}>edit</button>
          <button onClick={impHandler}>Imp</button>
          <button onClick={deleteHandler}>delete</button>
        </div>
      )}
    </div>
  );
};

export default Todo;
