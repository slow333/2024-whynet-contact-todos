import styles from "../module-css/NoteForProj.module.css";
import NavBar from "./NavBar2";

function TodoList({todos, handleDelete}) {

  return (
     <>
       <NavBar/>
       <div>
         <div className='title'><h1 className='title'>할일들...</h1></div>
         <ul className='card'>
           {todos && todos.map((todo, index) =>
                <div key={todo.id}>
                  <div className='card-header d-flex flex-row justify-content-between'>
                    <div>
                      {index + 1} : {todo.title} ({todo.date.split(' ').slice(1)})
                    </div>
                    <button className={styles.btnDelete}
                            onClick={() => handleDelete(todo.id)}>
                      <span className={styles.text}>Delete</span><span className={styles.icon}>X</span>
                    </button>
                  </div>
                  <div className='card-body p-2'></div>
                  <p className='card-text pb-2' style={{whiteSpace: 'pre-line'}}>{todo.todo}</p>
                </div>
           )}
         </ul>
       </div>
     </>
  );
}

export default TodoList;
