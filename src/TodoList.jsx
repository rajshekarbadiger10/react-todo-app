import { useState } from "react"

export default function TodoList() {

    let[todos,settodos] = useState(["sample tasks"])
    let [newTodo,setNewTodo] = useState("");

    let addNewTask = () => {
        settodos([...todos, newTodo]);
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
                   <li>{todo}</li>
                ))}
            </ul>
        </div>
    )
}