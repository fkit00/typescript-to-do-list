import React from 'react';




interface Props{
    todo:Todo
    toggle:toggle
}

export default function TodoListItem ({todo, toggle}:Props) {
  return(<li>
    <label
      style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
    >
      <input type="checkbox" checked={todo.complete} onClick={() => {
            toggle(todo)}} /> {todo.text}
    </label>
  </li>)}
