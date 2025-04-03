const API_URL = "http://localhost:5000/tasks";

// Fetch tasks from backend
async function fetchTasks() {
    let response = await fetch(API_URL);
    let tasks = await response.json();
    displayTasks(tasks);
}

// Display tasks in the UI
function displayTasks(tasks) {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear existing tasks

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${task} <button onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    });
}

// Add a new task
async function addTask() {
    let taskInput = document.getElementById("taskInput");

    if (taskInput.value.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }

    let response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: taskInput.value })
    });

    if (response.ok) {
        fetchTasks(); // Refresh tasks list
        taskInput.value = ""; // Clear input
    }
}

// Delete a task
async function deleteTask(index) {
    let response = await fetch(`${API_URL}/${index}`, { method: "DELETE" });

    if (response.ok) {
        fetchTasks(); // Refresh tasks list
    }
}

// Fetch tasks on page load
fetchTasks();
