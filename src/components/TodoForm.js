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
       <>
         <div className='title'><h1 className='title'>할일을 입력하세요.</h1></div>

         <form onSubmit={handleSubmit}>
           <div className="input-group mb-3">
             <div className="input-group-text">제목</div>
             <input onChange={handleChange} name='title' value={value.title}
                    type="text" className="form-control" placeholder="제목" aria-label="title"/>
             <div className="input-group">
               <span className="input-group-text">내용</span>
               <div className="form-floating">
             <textarea onChange={handleChange} name='todo' value={value.todo}
                       rows='3' style={{height: '100%'}}
                       className="form-control"
                       aria-label=" textarea"
                       id="floatingTextarea"
             />
                 <label htmlFor="floatingTextarea">Comments</label>
               </div>
               <button className='btn btn-success'>입력</button>
             </div>

           </div>
         </form>
       </>
  );
}

export default TodoForm;