const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // Correct way to parse JSON body

let tasks = []; // Temporary storage for tasks

// Get all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Add a new task
app.post("/tasks", (req, res) => {
    console.log("Request Body:", req.body); // Debugging line

    const task = req.body.task;
    if (!task) {
        return res.status(400).json({ error: "Task cannot be empty" });
    }
    tasks.push(task);
    res.json({ message: "Task added", tasks });
});

// Delete a task
app.delete("/tasks/:index", (req, res) => {
    const index = parseInt(req.params.index);
    if (index < 0 || index >= tasks.length) {
        return res.status(400).json({ error: "Invalid task index" });
    }
    tasks.splice(index, 1);
    res.json({ message: "Task deleted", tasks });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
