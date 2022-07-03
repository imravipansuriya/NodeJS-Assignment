var http = require('http');
var fs = require('fs');
// var vegetablesData = require('./vegetablesData.json')

var server = http.createServer((req, res) => {
  console.log(req.url)
  if (req.url === '/vegetables') {
    fs.readFile('vegetablesData.json', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
}).listen(8080, () => {
  console.log(`port is running on 8080`)
});