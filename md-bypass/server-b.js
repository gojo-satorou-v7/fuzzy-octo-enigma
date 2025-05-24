// server-b.js
const express = require('express');
const app = express();
const PORT = 3001;

// Serve a small text file as an attachment
app.get('/file', (req, res) => {
  res.setHeader('Content-Disposition', 'attachment; filename="example.txt"');
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello from Server B!\n');
});

app.listen(PORT, () => {
  console.log(`Server B listening on http://localhost:${PORT}`);
});
