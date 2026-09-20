const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = "secret_key";

let users = [];
let students = [];

// ================= AUTHENTICATION =================

// Register
app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({
        username: username,
        password: hashedPassword
    });

    res.send("User registered successfully");
});

// Login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(401).send("Invalid username or password");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return res.status(401).send("Invalid username or password");
    }

    const token = jwt.sign(
        { username: username },
        SECRET_KEY,
        { expiresIn: "1h" }
    );

    res.json({
        message: "Login successful",
        token: token
    });
});

// ================= JWT MIDDLEWARE =================

const authenticate = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send("Access denied");
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).send("Invalid or expired token");
    }
};

// ================= STUDENT CRUD =================

// CREATE
app.post("/students", authenticate, (req, res) => {

    students.push(req.body);

    res.send("Student added successfully");
});

// READ
app.get("/students", authenticate, (req, res) => {

    res.json(students);
});

// UPDATE
app.put("/students/:id", authenticate, (req, res) => {

    const id = parseInt(req.params.id);

    if (!students[id]) {
        return res.status(404).send("Student not found");
    }

    students[id] = req.body;

    res.send("Student updated successfully");
});

// DELETE
app.delete("/students/:id", authenticate, (req, res) => {

    const id = parseInt(req.params.id);

    if (!students[id]) {
        return res.status(404).send("Student not found");
    }

    students.splice(id, 1);

    res.send("Student deleted successfully");
});

// ================= ADVANCED FEATURE =================

// Search students by department
app.get("/students/search/:department", authenticate, (req, res) => {

    const department = req.params.department;

    const result = students.filter(
        student => student.department === department
    );

    res.json(result);
});

// ================= SERVER =================

app.listen(3000, () => {
    console.log("Server running on port 3000");
});