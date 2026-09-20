const express = require('express');
const app = express();
// Custom Middleware
app.use((req, res, next) => {
 console.log("Request Method:", req.method);
 console.log("Request URL:", req.url);
 next();
 });
// Route
app.get('/', (req, res) => {
 res.send("Middleware Example");
});
app.listen(3000, () => {
 console.log("Server running...");
});