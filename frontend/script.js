// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", async () => {
    const taskList = document.getElementById("task-list");
    const addTaskButton = document.getElementById("add-task-button");
    const taskInput = document.getElementById("task-input");

    // Fetch all tasks from the backend
    const fetchTasks = async () => {
        try {
            const res = await fetch("http://localhost:5000/tasks");
            const tasks = await res.json();

            // Clear the task list
            taskList.innerHTML = "";

            // Loop through tasks and display them
            tasks.forEach((task) => {
                const li = document.createElement("li");
                li.textContent = task.task;
                li.setAttribute("data-id", task._id);

                // Delete task button
                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                deleteBtn.addEventListener("click", () => deleteTask(task._id));

                li.appendChild(deleteBtn);
                taskList.appendChild(li);
            });
        } catch (err) {
            console.error("Error fetching tasks:", err);
        }
    };

    // Add a task when the button is clicked
    addTaskButton.addEventListener("click", async (e) => {
        e.preventDefault();

        const task = taskInput.value.trim();
        if (!task) return;

        try {
            const res = await fetch("http://localhost:5000/tasks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ task }),
            });

            const data = await res.json();
            if (res.status === 200) {
                console.log("Task added, refreshing task list...");
                fetchTasks();
            }
        } catch (err) {
            console.error("Error adding task:", err);
        }

        taskInput.value = "";
    });

    // Delete a task
    const deleteTask = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/tasks/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                fetchTasks(); // Refresh task list after deletion
            }
        } catch (err) {
            console.error("Error deleting task:", err);
        }
    };

    // Initialize task list
    fetchTasks();
});
