const express = require('express');
const app = express();

// Home Route
app.get('/', (req, res) => {
    res.send("Welcome to Express Home Page");
});

// About Route
app.get('/about', (req, res) => {
    res.send("About Page - Express Framework");
});

// Contact Route
app.get('/contact', (req, res) => {
    res.send("Contact Page");
});

// Handling unknown routes
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

// Starting server
app.listen(3000, () => {
    console.log("Express server running on port 3000");
});
