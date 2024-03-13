import NavBar from "../components/NavBar2";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import {useEffect, useState} from "react";
import NavEl from "./NavEl";

function TodoNav({setTodos, todos, handleDelete}) {

  return (
       <NavEl>
         <TodoForm setTodos={setTodos}/>
         <TodoList todos={todos} setTodos={setTodos} onDelete={handleDelete}/>
       </NavEl>
  );
}

export default TodoNav;