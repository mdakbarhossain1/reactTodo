import { useEffect, useState } from "react";
import "./style.css";


function Todos() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {
        if (newTask.trim() !== "") {
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            setNewTask("");
            saveTasks(updatedTasks);
        }
    };

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        if (Array.isArray(storedTasks)) { // Check if storedTasks is an array
            setTasks(storedTasks);
        }
    }, []);

    function saveTasks(items) {
        localStorage.setItem('tasks', JSON.stringify(items));
    }

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        saveTasks(updatedTasks);
    };

    const editTask = (index) => {
        const editedTask = prompt("Edit task:", tasks[index]);
        if (editedTask !== null) {
            const updatedTasks = [...tasks];
            updatedTasks[index] = editedTask;
            setTasks(updatedTasks);
            saveTasks(updatedTasks);
        }
    };

    return (

        <div>
            <div className="todos-title">
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