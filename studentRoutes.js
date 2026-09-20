const express = require("express");

const router = express.Router();

// GET all students
router.get("/", (req, res) => {
    res.json([
        { id: 1, name: "Smith", department: "IT" },
        { id: 2, name: "John", department: "CSE" },
        { id: 3, name: "David", department: "ECE" }
    ]);
});

// GET student by ID
router.get("/:id", (req, res) => {
    const id = req.params.id;

    res.send(`Details of student with ID: ${id}`);
});

// POST a new student
router.post("/", (req, res) => {
    const student = req.body;

    res.json({
        message: "Student added successfully",
        student: student
    });
});

// DELETE student
router.delete("/:id", (req, res) => {
    const id = req.params.id;

    res.send(`Student with ID ${id} deleted successfully`);
});

module.exports = router;