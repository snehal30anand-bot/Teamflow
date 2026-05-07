import { useEffect, useState } from "react";

import api from "../api";

export default function Dashboard() {

  const role = localStorage.getItem("role");

  const [title, setTitle] = useState("");

  const [tasks, setTasks] = useState([]);

  // LOAD TASKS
  const loadTasks = async () => {

    try {

      const res = await api.get("/tasks");

      setTasks(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  useEffect(() => {

    loadTasks();

  }, []);

  // CREATE TASK
  const createTask = async () => {

    try {

      await api.post("/tasks", {
        title,
        status: "Pending"
      });

      setTitle("");

      loadTasks();

    } catch (err) {

      console.log(err);

    }

  };

  // DELETE TASK
  const deleteTask = async (id) => {

    try {

      await api.delete(`/tasks/${id}`);

      loadTasks();

    } catch (err) {

      console.log(err);

    }

  };

  // UPDATE STATUS
  const updateStatus = async (id) => {

    try {

      await api.put(`/tasks/${id}`, {
        status: "Completed"
      });

      loadTasks();

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>TeamFlow Dashboard 🚀</h1>
<button
  onClick={() => {

    localStorage.clear();

    window.location.href = "/login";

  }}
>
  Logout
</button>
      {/* ADMIN ONLY */}

      {role === "Admin" && (

        <div>

          <input
            type="text"
            placeholder="Enter Task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button onClick={createTask}>
            Add Task
          </button>

        </div>

      )}

      <hr />

      <h2>All Tasks</h2>

      {tasks.map((task) => (

        <div
          key={task.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px"
          }}
        >

          <h3>{task.title}</h3>

          <p>Status: {task.status}</p>

          {/* ADMIN ONLY BUTTONS */}

          {role === "Admin" && (

            <div>

              <button onClick={() => updateStatus(task.id)}>
                Complete
              </button>

              <button onClick={() => deleteTask(task.id)}>
                Delete
              </button>

            </div>

          )}

        </div>

      ))}

    </div>

  );

}