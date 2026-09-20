const http = require('http');

// Creating server
const server = http.createServer((req, res) => {

    // Setting response header
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Handling different routes
    if(req.url === '/'){
        res.write("Welcome to Node.js Server");
    }
    else if(req.url === '/about'){
        res.write("This is About Page");
    }
    else{
        res.write("Page Not Found");
    }

        // Ending response
    res.end();
});

// Listening on port
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

