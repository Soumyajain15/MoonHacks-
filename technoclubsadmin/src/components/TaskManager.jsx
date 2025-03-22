import React, { useState, useEffect } from "react";
import "../styles/components/taskmanager.css";
import { FaPlus, FaTrash, FaCheckCircle } from "react-icons/fa";

const TaskManager = () => {
  // Load tasks from localStorage if available
  const getInitialTasks = () => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

  // State for tasks and new task input
  const [tasks, setTasks] = useState(getInitialTasks);
  const [newTask, setNewTask] = useState("");

  // Save tasks to localStorage when they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add New Task
  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  // Mark Task as Completed
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Delete Task
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="task-manager">
      <h4>✅ Task Manager</h4>

      {/* Add New Task Section */}
      <div className="task-input mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add New Task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-success" onClick={addTask}>
          <FaPlus /> Add Task
        </button>
      </div>

      {/* Task List */}
      <ul className="task-list">
        {tasks.length === 0 ? (
          <p className="no-tasks">🎉 No tasks available!</p>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              <span
                onClick={() => toggleTask(task.id)}
                className="task-text"
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {task.text}
              </span>
              <div className="task-actions">
                <button
                  className={`btn btn-sm ${
                    task.completed ? "btn-secondary" : "btn-success"
                  }`}
                  onClick={() => toggleTask(task.id)}
                >
                  <FaCheckCircle />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteTask(task.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskManager;
