// 2nd time practice of todo app. another way.

import { useState } from "react"


export default function Todo2() {

  const [task, setTask] = useState(['apple']);


  function handleInput(event) {
    event.preventDefault()
    console.log('object')
    const value = event.target.taskinput.value;
    console.log(value)
     if (value?.trim() !== '') {
       setTask([...task, value]);
     }
  }



  function deleteTask(index) {
    const updatetask = task.filter((_, i) => i !== index);
    setTask(updatetask);
 }


  return (
    <div>
      <form onSubmit={handleInput}>
        <input
          type="text"
          name="taskinput"
          placeholder="Name"
           />
        <button type="submit">
          Add
        </button>
      </form>

      <ol>
        {task.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  )
}


