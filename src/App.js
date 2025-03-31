import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [newtask, setNewtask] = useState("");
  const [tasks, settasks] = useState([]);

  function addtask() {
    if (newtask.trim() !== "") {
      settasks([...tasks, newtask]);
      setNewtask("");
    }  else {
      alert("Task cannot be empty!");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    settasks(updatedTasks);
  }

  return (
    <div className="App">
      <div className="task-container">
        <h2>React Todo List</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="Task Name"
            className="form-control"
            value={newtask}
            onChange={(e) => setNewtask(e.target.value)}
          />
          <button onClick={addtask} className="btn btn-success">
            ADD
          </button>
        </div>

        <ul className="list-group mt-3">
          {tasks.map((task, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {task}
              <button onClick={() => deleteTask(index)} className="btn btn-danger btn-sm">
                DELETE
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
