import styles from "../module-css/NoteForProj.module.css";

function NoteForProj({todos, onDelete}) {
  const svgImg = <svg
       xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
         d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
  </svg>
  // console.log(todos)
  return (
       <div className={styles.noteContainer}>
         <ul>
           {todos.map((action, index) =>
                <div key={action.id} className='card'>
                  <div className='card-header d-flex flex-row justify-content-between'>
                    <div>
                      {index + 1} : {action.title} ({action.date.split(' ').slice(1)})
                    </div>
                    <button className={styles.btnDelete}
                            onClick={() => onDelete(action.id)}>
                      <span className={styles.text}>Delete</span><span className={styles.icon}>X</span>
                    </button>
                  </div>
                  <div className='card-body p-2'></div>
                  <p className='card-text pb-2' style={{whiteSpace: 'pre-line'}}>{action.todo}</p>
                </div>
           )}
         </ul>
       </div>
  );
}

export default NoteForProj;
