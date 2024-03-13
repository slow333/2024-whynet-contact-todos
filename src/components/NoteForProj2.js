import styles from "../module-css/NoteForProj.module.css";
import {useEffect, useState} from "react";
import NavBar from "./NavBar2";
import TodoForm from "./TodoForm";

function NoteForProj() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    if (todos.length === 0) return;
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  useEffect(() => {
    const getTodos = localStorage.getItem("todos");
    const todosParsed = JSON.parse(getTodos);
    if (todosParsed.length > 0)
      setTodos(todos => [...todosParsed]);
  }, [])

  function handleDelete(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  return (
     <>
       <NavBar/>
       <div className='container'>
         <TodoForm setTodos={setTodos}/>
         <h3>할일들...</h3>
         <ul className='card'>
           {todos.map((action, index) =>
                <div key={action.id}>
                  <div className='card-header d-flex flex-row justify-content-between'>
                    <div>
                      {index + 1} : {action.title} ({action.date.split(' ').slice(1)})
                    </div>
                    <button className={styles.btnDelete}
                            onClick={() => handleDelete(action.id)}>
                      <span className={styles.text}>Delete</span><span className={styles.icon}>X</span>
                    </button>
                  </div>
                  <div className='card-body p-2'></div>
                  <p className='card-text pb-2' style={{whiteSpace: 'pre-line'}}>{action.todo}</p>
                </div>
           )}
         </ul>
       </div>
     </>
  );
}

export default NoteForProj;
