const express = require("express");

const app = express();

app.use(express.json());

// Student data
const students = [
    { id: 1, name: "Arun", department: "CSE" },
    { id: 2, name: "Bala", department: "IT" },
    { id: 3, name: "Chandru", department: "ECE" },
    { id: 4, name: "Dinesh", department: "CSE" },
    { id: 5, name: "Ezhil", department: "IT" },
    { id: 6, name: "Faisal", department: "ECE" },
    { id: 7, name: "Gopal", department: "CSE" },
    { id: 8, name: "Hari", department: "IT" },
    { id: 9, name: "Imran", department: "ECE" },
    { id: 10, name: "Jagan", department: "CSE" }
];

// Pagination API
app.get("/students", (req, res) => {

    // Get page and limit from URL
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;

    // Calculate starting index
    const startIndex = (page - 1) * limit;

    // Calculate ending index
    const endIndex = page * limit;

    // Get records for current page
    const result = students.slice(startIndex, endIndex);

    // Calculate total pages
    const totalPages = Math.ceil(students.length / limit);

    res.json({
        page: page,
        limit: limit,
        totalRecords: students.length,
        totalPages: totalPages,
        students: result
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});