const express = require('express');
const path = require('path');
const app = express();
const PORT = 7777;

// app.use(express.static(path.join(__dirname, '../frontend/dist')));

// app.get('/api', (req, res) => {
//   res.json({ message: 'Hello from Express Backend!' });
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
// });

app.get("/", (req, res) => {
    res.send('hello');
})

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
