const express = require("express");

const router = express.Router();

// GET all users
router.get("/", (req, res) => {
    res.json([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ]);
});

// GET user by ID
router.get("/:id", (req, res) => {
    const id = req.params.id;

    res.send(`Details of user with ID: ${id}`);
});

// POST a new user
router.post("/", (req, res) => {
    const user = req.body;

    res.json({
        message: "User added successfully",
        user: user
    });
});

module.exports = router;