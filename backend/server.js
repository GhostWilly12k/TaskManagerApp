require("dotenv").config();
  // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));


// Define Task Schema
const taskSchema = new mongoose.Schema({
    task: String
});
const Task = mongoose.model("Task", taskSchema);

// Middleware
app.use(cors());
app.use(express.json());

// Get all tasks
app.get("/tasks", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Add a new task
app.post("/tasks", async (req, res) => {
    const { task } = req.body;
    if (!task) return res.status(400).json({ error: "Task cannot be empty" });

    const newTask = new Task({ task });
    await newTask.save();
    res.json({ message: "Task added", task: newTask });
});

// Delete a task
app.delete("/tasks/:id", async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.json({ message: "Task deleted" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
