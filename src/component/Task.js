import React from "react";
function Task({ task, index, completeTask, removeTask }) {
  
  return (
    <>
      <div className="task">
        <li className="list-group-item">
          
          <div style={{ textDecoration: task.done ? "line-through" : "" }}>
            {task.title}
           
          </div>
          
          <button onClick={() => completeTask(index)} className='doneBtn'><i className="fa-solid fa-circle-check"></i></button>
          <button onClick={() => removeTask(index)} className='delBtn'><i class="fa-solid fa-trash-can"></i></button>
          
        </li>
      </div>
    </>
  );
}

export default Task;
