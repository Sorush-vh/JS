const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/todoApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Todo Schema
const todoSchema = new mongoose.Schema({
    text: { type: String, required: true },
    type: { type: String, required: true },
    date: { type: Date, required: true },
    completed: { type: Boolean, default: false }
});

const Todo = mongoose.model('Todo', todoSchema);

// Helper function to save data to a JSON file
const saveToFile = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// API Endpoints for Users
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Save registered user to a JSON file
app.post('/api/saveRegisteredUser', (req, res) => {
    try {
        const registeredUsers = JSON.parse(fs.readFileSync('registeredUsers.json', 'utf8') || '[]');
        registeredUsers.push(req.body);
        saveToFile('registeredUsers.json', registeredUsers);
        res.json({ message: 'Registered user saved' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Save logged-in user to a JSON file
app.post('/api/saveLoggedInUser', (req, res) => {
    try {
        const loggedInUsers = JSON.parse(fs.readFileSync('loggedInUsers.json', 'utf8') || '[]');
        loggedInUsers.push(req.body);
        saveToFile('loggedInUsers.json', loggedInUsers);
        res.json({ message: 'Logged-in user saved' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login Endpoint
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        res.json({ message: 'Login successful' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Existing API Endpoints
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/todos', async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        await newTodo.save();
        res.json(newTodo);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.delete('/todos/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Export todos to a JSON file
app.get('/export-todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        const filePath = path.join(__dirname, '..', 'todos.json');
        console.log(`Saving todos to: ${filePath}`); // Log the file path
        fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
        res.download(filePath, 'todos.json', (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
            }
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Serve static files from the "src" directory
app.use(express.static(path.join(__dirname, '..')));

// Define a route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..','index.html'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});