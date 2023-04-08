import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  }


  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input type="text" value={value} placeholder="What task you gon do today brov?..." className="todo-input" required onChange={(e) => setValue(e.target.value)}/>
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TodoForm

