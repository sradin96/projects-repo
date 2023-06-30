import React from 'react'

export default function Todo({ todo, toggleTodo }) {

  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <div className='todo-list__block'>
        <input className='todo-list__block-input' type="checkbox" id={todo.id} checked={todo.complete} onChange={handleTodoClick}/>
        <label className='todo-list__block-label' htmlFor={todo.id}>{todo.inputValue}</label>
    </div>
  )
}
