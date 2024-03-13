import NavBar from "../components/NavBar2";
import TodoList from "../components/TodoList";
import TodoNav from "./TodoNav";
import NavEl from "./NavEl";
import TodoForm from "../components/TodoForm";

function Homepage({todos, handleDelete}) {

  return (
     <>
       <NavEl>
         <TodoList todos={todos} onDelete={handleDelete}/>
       </NavEl>
     </>
  );
}

export default Homepage;