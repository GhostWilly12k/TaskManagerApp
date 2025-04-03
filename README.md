# TaskManagerApp
In this project, I developed a Task Manager web application designed to allow users to add, display, and delete tasks. The application was built using HTML, CSS, JavaScript, and Node.js with a MongoDB backend. The project was intended for academic purposes, showcasing my ability to implement full-stack development with a focus on building a functional and interactive web application.

Key Features:

Frontend:

The frontend of the application was designed using HTML for the structure, CSS for styling, and JavaScript to handle user interactions.

The user interface allows for seamless task creation and deletion with a simple input form and a dynamically updated task list.

Backend:

The backend of the application was built using Node.js and Express, providing a RESTful API to handle task management functionalities.

I integrated MongoDB to store and retrieve tasks. Tasks are saved to the database, and users can interact with the app by sending HTTP requests to fetch tasks or delete them.

MongoDB Integration:

I utilized MongoDB to store task data. Each task has a description, and a unique identifier was generated for each task using MongoDB's ObjectId.

The backend interacts with MongoDB through Mongoose, allowing smooth data management and retrieval.

API Routes:

I created routes to handle task operations:

GET /tasks: Fetches all tasks from the database.

POST /tasks: Adds a new task to the database.

DELETE /tasks/:id: Deletes a task based on its unique identifier.

Frontend-Backend Communication:

JavaScript was used to make asynchronous requests to the backend using the fetch API. This allows tasks to be added, deleted, and displayed without reloading the page.

The task list is dynamically updated upon adding or deleting tasks, creating a smooth user experience.

Throughout the development process, I received guidance from ChatGPT, which assisted me in troubleshooting issues and optimizing both the frontend and backend functionality. With their help, I was able to refine my understanding of full-stack web development concepts, such as handling asynchronous operations, integrating a backend with a database, and improving the user interface.

This project provided a solid foundation in web development and served as a valuable academic exercise in applying modern development practices.

