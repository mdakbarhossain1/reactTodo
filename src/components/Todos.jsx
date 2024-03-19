import { useState } from "react";
import "./style.css";


function Todos() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const editTask = (index) => {
        const editedTask = prompt("Edit task:", tasks[index]);
        if (editedTask !== null) {
            const updatedTasks = [...tasks];
            updatedTasks[index] = editedTask;
            setTasks(updatedTasks);
        }
    };

    return (

        <div>
            <div>
                <h1>Simple todo with React Js</h1>
                <p>You can added task Remove and edit task </p>
            </div>

            <div className="container">
                <span className="input">
                    <input
                        type="text"
                        value={newTask}
                        onChange={handleChange}
                        placeholder="New Todo"
                    />
                </span>

                <button onClick={addTask}>Submit</button>

                <ul className="todos-list">
                    {tasks.map((text, index) => (
                        <li key={index} className="todo">
                            <span>{text}</span>
                            <button className="close" onClick={() => deleteTask(index)}>
                                X
                            </button>
                            <button className="close" onClick={() => editTask(index)}>
                                Edit
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todos;