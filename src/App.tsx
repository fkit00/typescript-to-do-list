import React from 'react';
import  TodoList  from './TodoList';
import { useState } from 'react'
import AddToDoForm from './AddTodoForm';

let initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];






function App() {
const [todos, setTodos] = useState(initialTodos);

function toggle(selectedTodo:Todo){
  let newTodos=todos.map((todo)=>{
    if(todo === selectedTodo){
      return{
        ...todo, complete : !todo.complete
      }
      
    }
    return todo
  })
  setTodos(newTodos)
}

function addTodo(text:string){
  let newTodo = { text, complete: false };
  setTodos([...todos, newTodo]);
}



  return (
    <div className="App">
     <TodoList todos={todos} toggle={toggle}/>
     <AddToDoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
