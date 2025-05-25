// Initialize express server
const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Node.js Express</title>
    </head>
    <body>
      <h1>Welcome to My School Project!</h1>
      <p>This is the first node.js express project I've built.</p>
    </body>
    </html>
  `);
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
