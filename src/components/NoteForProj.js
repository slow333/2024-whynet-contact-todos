import styles from "../module-css/NoteForProj.module.css";

function NoteForProj({todos, onDelete}) {

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
