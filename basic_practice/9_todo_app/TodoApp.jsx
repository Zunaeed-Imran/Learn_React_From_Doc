// simple todo app practice.

import { useState } from "react"







export default function TodoApp() {

  const [task, setTask] = useState(['eat', 'work']);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addtask() {
    if (newTask.trim() !== '') {
      setTask([...task, newTask]);
      setNewTask('');
    }
  }

  function deleteTask(index) {
    const updatetask = task.filter((_, i) => i !== index);
    setTask(updatetask);
  }


  return (

    <div>
      <input
        type="text"
        placeholder=""
        value={newTask}
        onChange={handleInputChange} />
      <button type="button" onClick={addtask}>
        Add data
      </button>

      <ol>
        {task.map((task, index) => (
        <li key={index}>
          <span>{task}</span>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
        )
        )}
      </ol>
    </div>
  )
}


