import {Children, cloneElement, isValidElement, useEffect, useState} from "react";

function NavEl({children}) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (todos.length === 0) return;
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  useEffect(() => {
    const getTodos = localStorage.getItem("todos");
    const todosParsed = JSON.parse(getTodos);
    if (todosParsed.length > 0)
      setTodos([...todosParsed]);
  }, []);

  function handleDelete(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  const childrenWithProps = Children.map(children, child => {
    if (isValidElement(child)) {
      return cloneElement(child, {todos, setTodos, handleDelete});
    }
    return child;
  })
  return <div className='container'>{childrenWithProps} </div>
}

export default NavEl;