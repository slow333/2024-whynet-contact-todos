import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhynetContact from "./WhynetContact";
import Global8Contact from "./Global8Contact";
import NoteForProj from "./NoteForProj";
import TodoForm from "./TodoForm";
import {useEffect, useState} from "react";

function App() {
  const [todos, setTodos] = useState([])


  useEffect(() => {
    if(todos.length === 0) return;
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  useEffect(() => {
    const getTodos = localStorage.getItem("todos");
    const todosParsed = JSON.parse(getTodos);
    if(todosParsed.length > 0)
      setTodos(todos => [...todosParsed]);
  },[])

  function handleDelete(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id))

  }

  return (
    <div className="container">
      <h3>Note for project</h3>
      <TodoForm setTodos={setTodos}/>
      <NoteForProj todos={todos} onDelete={handleDelete}/>

      <h3>회사 연락처</h3>
      <WhynetContact />
      <h3>Global8 연락처</h3>
      <Global8Contact />
    </div>
  );
}

export default App;
