const express = require("express");

const app = express();

// Middleware to read JSON data
app.use(express.json());

// Import route modules
const studentRoutes = require("./studentRoutes");
const userRoutes = require("./userRoutes");

// Use modular routes
app.use("/students", studentRoutes);
app.use("/users", userRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Express Modular Routing Application");
});



app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});