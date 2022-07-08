import React, { useState } from 'react';
import '../component/todo.css'
function CreateTask({addTask}) {
    const [value,setValue]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!value) return;
        addTask(value);
        setValue('');
    }

    return ( 
        <>
         <form className="todo-add" >
          <input type="text" placeholder="✍ add item ...." value={value} onChange={e =>setValue(e.target.value)}/>
          <button  onClick={handleSubmit}><i className="fa-solid fa-plus"></i></button>
        
        </form>
        </>
     );
}

export default CreateTask;