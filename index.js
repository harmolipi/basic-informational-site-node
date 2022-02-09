const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_req, res) => {
  res
    .status(202)
    .setHeader('Content-Type', 'text/html')
    .sendFile(__dirname + '/index.html');
});

app.get('/about', (_req, res) => {
  res
    .status(202)
    .setHeader('Content-Type', 'text/html')
    .sendFile(__dirname + '/about.html');
});

app.get('/contact-me', (_req, res) => {
  res
    .status(202)
    .setHeader('Content-Type', 'text/html')
    .sendFile(__dirname + '/contact-me.html');
});

app.use((req, res, next) => {
  res
    .status(404)
    .setHeader('Content-Type', 'text/html')
    .sendFile(__dirname + '/404.html');
});

app.listen(port, () =>
  console.log(`Basic informational site app listening on port ${port}!`)
);
