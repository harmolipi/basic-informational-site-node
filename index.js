const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('Request received');
  const filename = req.url === '/' ? './index.html' : `.${req.url}.html`;

  fs.readFile(filename, (err, data) => {
    if (err) {
      fs.readFile('./404.html', (err, data) => {
        if (err) return console.log(err);
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(data);
        payload = data;
      });
      return console.log(err);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      console.log(`Sending response for ${filename}`);
      res.end(data);
    }
  });
});

server.listen(8080);
