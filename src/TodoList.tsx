import React from 'react';
import  TodoListItem  from './TodoListItem';

// we want to make more props and we pass in a todo array to map

interface Props{
    todos: Todo[];
    toggle:toggle
}

export default function TodoList({todos, toggle}: Props){
return(
    <ul>
        {todos.map((todo)=>(
            <TodoListItem key={todo.text} todo={todo} toggle={toggle}/>
        ))}
    </ul>
)


}