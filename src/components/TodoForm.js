import styles from '../module-css/TodoForm.module.css'
import {useState} from "react";
import {v4 as uuid} from "uuid";

function TodoForm({setTodos}) {
  const [value, setValue] = useState({
    id: '', title: '', todo: '', date: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      title: value.title,
      todo: value.todo,
      date: new Date().toLocaleDateString()
    }
    setTodos(todos => [...todos, newTodo]);
    setValue({id: '', title: '', todo: '', date: '',})
  }

  function handleChange(e) {
    e.preventDefault();
    setValue({
      ...value, [e.target.name]: e.target.value
    })
  }

  return (
       <form onSubmit={handleSubmit}>
         <div className="input-group mb-3">
           <div className="input-group-text">제목</div>
           <input onChange={handleChange} name='title' value={value.title}
                  type="text" className="form-control" placeholder="제목" aria-label="title"/>
           <div className="input-group">
             <span className="input-group-text">내용</span>
             <textarea onChange={handleChange} name='todo' value={value.todo}
                       className="form-control" aria-label=" textarea"></textarea>
             <button className='btn btn-success'>입력</button>
           </div>

         </div>
       </form>
  );
}

export default TodoForm;