import React, { useState } from 'react'

const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  }


  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input type="text" value={value} placeholder="Update Task..." className="todo-input" required onChange={(e) => setValue(e.target.value)}/>
      <button type="submit">Update Task</button>
    </form>
  )
}

export default EditTodoForm