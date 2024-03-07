// Create web server
const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});

// Path: comments.js
// Display comments
app.get('/comments', (req, res) => {
  res.send('Comments will be displayed here');
});

// Path: comments.js
// Add comment
app.post('/comments', (req, res) => {
  res.send('Comment will be added here');
});

// Path: comments.js
// Update comment
app.put('/comments', (req, res) => {
  res.send('Comment will be updated here');
});

// Path: comments.js
// Delete comment
app.delete('/comments', (req, res) => {
  res.send('Comment will be deleted here');
});

// Path: comments.js
// Display comment by ID
app.get('/comments/:id', (req, res) => {
  res.send('Comment will be displayed here by ID');
});

// Path: comments.js
// Update comment by ID
app.put('/comments/:id', (req, res) => {
  res.send('Comment will be updated here by ID');
});

// Path: comments.js
// Delete comment by ID
app.delete('/comments/:id', (req, res) => {
  res.send('Comment will be deleted here by ID');
});
```

###