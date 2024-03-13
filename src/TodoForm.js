import styles from './TodoForm.module.css'
import {useState} from "react";
import {v4 as uuid} from "uuid";

function TodoForm({setTodos}) {
  const [value, setValue] = useState({
    id:'', title: '', todo: '', date: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        id: uuid(),
        title: value.title,
        todo: value.todo,
        date: new Date().toLocaleDateString()
    }
    setTodos(todos => [...todos, newTodo])
  }
  function handleChange(e) {
    e.preventDefault();
    setValue({
      ...value, [e.target.name] : e.target.value
    })
  }

  return (
       <form onSubmit={handleSubmit}>
         <div className={styles.label}>제목</div>
         <input onChange={handleChange} name='title' value={value.title}/>
         <div className={styles.label}>내용</div>
         <input onChange={handleChange} name='todo' value={value.todo}/>
         <button className={styles.btn}>입력</button>
       </form>
  );
}

export default TodoForm;