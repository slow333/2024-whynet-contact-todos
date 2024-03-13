import WhynetContact from "./components/WhynetContact";
import Global8Contact from "./components/Global8Contact";
import NoteForProj from "./components/NoteForProj";
import TodoForm from "./components/TodoForm";
import {useEffect, useState} from "react";
import NavBar from "./components/NavBar";

function App() {
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
       <div>
         <NavBar/>
         <div className="container mt-5 pt-1">
           <h3>Note for project</h3>
           <TodoForm setTodos={setTodos}/>
           <NoteForProj todos={todos} onDelete={handleDelete}/>

           <h3>회사 연락처</h3>
           <WhynetContact/>
           <h3>Global8 연락처</h3>
           <Global8Contact/>
         </div>

       </div>
  );
}

export default App;
