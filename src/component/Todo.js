import Task from "./Task";
import React, { useEffect, useState } from "react";
import "../component/todo.css";
import CreateTask from "./CreateTask";
import notes from '../component/list.png';
const getData=()=>{
  let list =localStorage.getItem('lists');
 
  if(list)
  {
    return JSON.parse(localStorage.getItem('lists'));
  }
  else{
    return [];
  }
}
function Todo() {
  const [item, setItem] = useState(getData());
  const [remain, setRemain] = useState(0);

  
  useEffect(() => {
    setRemain(item.filter((task) => !task.done).length);
  });

  

  useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(item))
  },[item]);

  const addTask = (title) => {
    
    const newTask = [...item, { title, done: false }];
    setItem(newTask);
  };

  const completeTask = (index) => {
    const newTask = [...item];
    newTask[index].done = true;
    setItem(newTask);
  };
  const removeTask = (index) => {
    const newTask = [...item];

    newTask.splice(index, 1);
    setItem(newTask);
  };
  return (
    <>
      <div className="container">
        <img src={notes} alt='todo list' width='80px' height='80px'/>
        <h6 className="mb-4 text-uppercase pending">pending task({remain})</h6>
        <div className="create-task">
          <CreateTask addTask={addTask} />
        </div>
        <div className="empty" style={{ visibility: item.length===0 ?'visible':'hidden'}}>no task found 😥</div>
        <ul className="list-group list-group-flush">
          
          <div className="items">
            {item.map((task, index) => (
              <Task
                task={task}
                index={index}
                key={index}
                completeTask={completeTask}
                removeTask={removeTask}
              />
            ))}
          </div>
        </ul>
      </div>
    </>
  );
}

export default Todo;
