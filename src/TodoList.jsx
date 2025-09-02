import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'; //auto included by vs code

export default function TodoList() {

    let[todos,settodos] = useState([{task: "sample-task", id:uuidv4()}])
    let [newTodo,setNewTodo] = useState("");

    let addNewTask = () => {
        settodos([...todos, {task: newTodo, id:uuidv4()}]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    return(
        <div>
            <input placeholder="add a task" 
            value={newTodo} 
            onChange={updateTodoValue}/>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <br />

            <hr />
            <h4>tasks todo</h4>
            <ul>
                {todos.map((todo) => (
                   <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        </div>
    )
} 