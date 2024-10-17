Project Overview

This documentation provides a comprehensive overview and protocol for a Todo list application built using the MEAN stack (MongoDB, Express.js, AngularJS, Node.js). The project is a part of the Web Frameworks course requirements, covering user authentication, form validation, CRUD operations on todo items, and UI development using Angular Material components.

1. Project Structure and Setup

1.1. Directory Structure

	•	/backend: Contains server-related files, including API routes and MongoDB connection.
	•	server.js: Main server file, handles API endpoints, and database connections.
	•	registeredUsers.json: Stores data of registered users.
	•	loggedInUsers.json: Stores data of currently logged-in users.
	•	todos.json: Stores todo items.
	•	/frontend: Contains client-side application files.
	•	index.html: Main entry point for the application, handles login and registration.
	•	todo.html: Main interface for the todo list, accessible after login.
	•	app.js: AngularJS application logic, handles controllers and services.
	•	menu.js: Manages menu interactions and user authentication.
	•	LoggedInEmail.js: Service to handle email state of the current logged-in user.
	•	styles.css: Stylesheet for the application UI.
	•	main.ts: Placeholder for additional TypeScript functionality (file not reviewed).

1.2. Installation and Setup

	1.	Backend Setup:
	•	Navigate to the /backend directory.
	•	Run npm install to install necessary packages.
	•	Start the server with node server.js. The server will run on http://localhost:3000.
	2.	Frontend Setup:
	•	Ensure all scripts are correctly linked in the index.html and todo.html.
	•	The application can be served using any static file server, such as http-server for development.

2. Application Features

2.1. User Authentication

	•	Registration: Users can sign up by providing a name, email, password, and repeat password.
	•	Passwords must be a minimum of 12 characters.
	•	Validation checks include empty fields, email format, password length, and password match.
	•	Login: Users log in using their registered email and password.
	•	Email and password are checked against stored values in registeredUsers.json.
	•	Successful login saves the user’s email in loggedInUsers.json.

2.2. Todo Management

	•	Create Todo: Users can create a new todo item with text, type, and date.
	•	Types include Task, Reminder, Event, Project, and Note.
	•	Todo items are stored in todos.json.
	•	View Todos: Logged-in users are presented with a table view of all their todos.
	•	Each todo item displays its text, type, creation date, and completion status.
	•	A checkbox allows users to mark a todo as completed, updating its status in the database.
	•	Completed todos are styled differently (e.g., strikethrough text).
	•	Delete Todo: Users can delete a todo item, removing it from the database.

2.3. User Interface

	•	The application uses Angular Material components for a modern and responsive design.
	•	Components such as tables, input fields, and buttons are styled to provide a consistent user experience.

3. Technical Implementation

3.1. Backend (Node.js and Express)

	•	Server Setup (server.js):
	•	Express is used to create the server and handle API requests.
	•	Mongoose is used for MongoDB integration, defining schemas for users and todos.
	•	Endpoints:
	•	/api/users: Handles registration and user retrieval.
	•	/api/login: Validates user login credentials.
	•	/api/saveRegisteredUser: Saves a registered user’s data to registeredUsers.json.
	•	/api/saveLoggedInUser: Saves a logged-in user’s email to loggedInUsers.json.
	•	/todos: Handles CRUD operations for todo items.

3.2. Frontend (AngularJS)

	•	Main Module (app.js):
	•	Defines the AngularJS module todoApp.
	•	Includes a factory UserService to manage the logged-in user’s state.
	•	TodoController manages the todo list operations, interacting with the server via $http.
	•	Menu Module (menu.js):
	•	Defines the menuApp module, handling user registration, login, and menu interactions.
	•	StringService stores the current user’s email for session management.
	•	menuController manages showing and hiding the login and signup forms, validating input, and handling API requests for user actions.
	•	LoggedInEmail Service (LoggedInEmail.js):
	•	Simple service to get and set the current user’s email.

3.3. Data Storage

	•	MongoDB:
	•	A User schema defines user documents with fields for name, email, and password.
	•	A Todo schema defines todo documents with fields for text, type, date, and completion status.
	•	JSON Files:
	•	registeredUsers.json: Stores registered user data.
	•	loggedInUsers.json: Tracks logged-in users’ emails.
	•	todos.json: Contains todo item data.

3.4. Security and Validation

	•	Form validation is implemented on both the client and server sides.
	•	Passwords are required to be at least 12 characters long.
	•	Email validation ensures the proper format before accepting user registration.
	•	Proper error handling is included to manage invalid inputs and server errors.

4. User Interface and Experience

	•	The application uses a responsive design with Angular Material for consistent and intuitive UI components.
	•	index.html provides a login and registration interface.
	•	todo.html displays the main todo list, accessible only to authenticated users.
	•	styles.css defines custom styles for application elements, including hover effects, button styles, and layout adjustments.
	•	The use of Material Design components enhances the usability and aesthetics of the application.

Conclusion

This documentation provides a complete overview of the Todo list application, ensuring all required features and criteria are met. The MEAN stack architecture enables efficient development and maintenance, with a focus on scalability and security. This project serves as a practical demonstration of skills in web development, following best practices and guidelines.