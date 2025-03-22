import React, { useState, useEffect } from "react";
import ChartCard from "../components/ChartCard";
import EventCard from "../components/EventCard";
import MemberStats from "../components/MemberStats";
import { Row, Col, Button } from "react-bootstrap";
import "../styles/styles.css";

function Dashboard() {
  // ✅ Task Manager State & Local Storage Handling
  const getInitialTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  const [tasks, setTasks] = useState(getInitialTasks);
  const [newTask, setNewTask] = useState("");

  // ✅ Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ✅ Add New Task
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

  // ✅ Mark Task as Completed
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // ✅ Delete Task
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="container mt-4">
      {/* Dashboard Stats */}
      <Row>
        {[
          { value: "100", label: "Total Students" },
          { value: "15", label: "Active Events" },
          { value: "65", label: "Event Participation" },
          { value: "2.5 Lacs+", label: "Total Funds" },
        ].map((item, index) => (
          <Col key={index} md={3}>
            <div className="card p-3 text-center shadow-sm dashboard-card">
              <h4>{item.value}</h4>
              <p>{item.label}</p>
            </div>
          </Col>
        ))}
      </Row>

      {/* Charts and Member Stats */}
      <Row className="my-4">
        <Col md={6}>
          <ChartCard title="Community Growth" type="pie" />
        </Col>
        <Col md={6}>
          <ChartCard title="Monthly Participation" type="line" />
        </Col>
      </Row>

      {/* Recent Activity & Task Manager */}
      <Row>
        <Col md={6}>
          <div className="card p-3 shadow-sm">
            <h6>📢 Recent Activity</h6>
            <ul className="list-unstyled">
              <li className="alert alert-success mb-2">
                ✅ User 'John Doe' created a new event.
              </li>
              <li className="alert alert-warning mb-2">
                ⚠️ Server memory usage is high!
              </li>
              <li className="alert alert-info mb-2">
                ✔️ Club 'TechnoHub' approved by admin.
              </li>
            </ul>
          </div>
        </Col>

        {/* Task Manager Section */}
        <Col md={6}>
          <div className="card p-3 shadow-sm">
            <h6>✅ Task Manager</h6>
            <div className="d-flex mb-2">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Add New Task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <Button variant="success" onClick={addTask}>
                ➕ Add
              </Button>
            </div>

            <ul className="list-group">
              {tasks.length === 0 ? (
                <li className="list-group-item text-muted">🎉 No tasks available!</li>
              ) : (
                tasks.map((task) => (
                  <li
                    key={task.id}
                    className={`list-group-item d-flex justify-content-between ${
                      task.completed ? "bg-success text-white" : ""
                    }`}
                  >
                    <span
                      onClick={() => toggleTask(task.id)}
                      style={{
                        textDecoration: task.completed ? "line-through" : "none",
                        cursor: "pointer",
                      }}
                    >
                      {task.text}
                    </span>
                    <div>
                      <Button
                        variant={task.completed ? "secondary" : "success"}
                        size="sm"
                        onClick={() => toggleTask(task.id)}
                        className="me-1"
                      >
                        ✔️
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => deleteTask(task.id)}
                      >
                        🗑️
                      </Button>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </Col>
      </Row>

      {/* Upcoming Events */}
      <h5 className="mt-4">📅 Upcoming Events</h5>
      <Row>
        {[
          { title: "Hackathon", date: "25 Mar 2025", rating: "4.5" },
          { title: "Code-War 2025", date: "5 April 2025", rating: "4.8" },
          { title: "Elite Night", date: "18 May 2025", rating: "4.2" },
        ].map((event, index) => (
          <Col key={index} md={4}>
            <EventCard title={event.title} date={event.date} rating={event.rating} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Dashboard;
