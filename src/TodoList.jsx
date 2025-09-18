import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'; //auto included by vs code

export default function TodoList() {

    let[todos,settodos] = useState([{task: "sample-task", id:uuidv4()}])
    let [newTodo,setNewTodo] = useState("");

    let addNewTask = () => {
        settodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id:uuidv4()}]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        settodos(todos.filter((todo) => todo.id != id));

    }

    let upperCaseAll = () => {
        settodos( (prevTodos) => 
           prevTodos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase(),
            };
           })
        );
    }; 

    return(
        <div>
            <input placeholder="add a task" 
            value={newTodo} 
            onChange={updateTodoValue}/>
            <br></br>
            <button className="add-btn" onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <br />

            <hr />
            <h4>TODO APP</h4>
            <ul>
                {todos.map((todo) => (

                   <li key={todo.id}>
                    <span>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <button className="delete-btn" onClick={()=>deleteTodo(todo.id)}>delete</button>
                    </li>
                ))}
            </ul>
            <br />
            <button className="action-btn" onClick={upperCaseAll}>UpperCase All</button>
        </div>
    )
} 