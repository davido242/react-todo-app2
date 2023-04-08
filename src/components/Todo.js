import React from 'react';
import editIcon from '../assets/images/edited.svg'
import deleteIcon from '../assets/images/deleted.svg'

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='todo-wrap'>      
      <p onClick={() => {toggleComplete(task.id)}} className={`${task.completed ? 'completed' : " "}`}>{task.task}</p>
      <div>
        <img src={editIcon} alt="" onClick={() => editTodo(task.id)} />
        <img src={deleteIcon} alt="" onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  )
}

export default Todo
