const express = require('express');
const app = express();
const port = 3000;

// Store submitted messages
let messages = [];

// Serve a simple HTML page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Guestbook - v2</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
          text-align: center;
          padding: 50px;
        }
        h1 {
          color: #333;
        }
        form {
          margin-top: 20px;
        }
        input, button {
          padding: 10px;
          font-size: 16px;
        }
        .messages {
          margin-top: 20px;
          text-align: left;
          display: inline-block;
        }
      </style>
    </head>
    <body>
      <h1>Welcome to the Guestbook - v2!</h1>
      <form action="/submit" method="post">
        <input type="text" name="entry" placeholder="Enter your message">
        <button type="submit">Submit</button>
      </form>
      <div class="messages">
        <h2>Messages:</h2>
        <ul>
          ${messages.map(msg => `<li>${msg}</li>`).join('')}
        </ul>
      </div>
    </body>
    </html>
  `);
});

// Handle form submission
app.post('/submit', (req, res) => {
  const message = req.body.entry;
  messages.push(message); // Store the message
  res.redirect('/'); // Redirect back to the home page
});

// Start the server
app.listen(port, () => {
  console.log(`Guestbook app (v2) listening at http://localhost:${port}`);
});