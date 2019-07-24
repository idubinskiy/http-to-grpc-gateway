const express = require('express');
const app = express();
const port = 8000;

// parse JSON request body
app.use(express.json());

// add source header, log requests
app.use((req, res, next) => {
  res.setHeader('X-Source-Server', 'node');
  console.log(`Got request for path: ${req.url}, method: ${req.method}`);
  next();
});

app.get('/hello', (req, res) => {
  res.send({
    message: 'Hello World!'
  });
});

app.post('/hello', (req, res) => {
  res.send({
    message: `Hello ${req.body.name}!`
  });
});

app.listen(port, () => console.log(`Node HTTP server listening on port ${port}!`));
