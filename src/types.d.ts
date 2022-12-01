interface Todo {
    text:string;
    complete:boolean;
}

type toggle = (selectedTodo: Todo)=> void

type AddToDo = (text:string) => void