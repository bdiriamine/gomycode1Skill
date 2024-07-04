const http = require('http');
const fs = require('fs')
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    req.pipe(fs.createWriteStream('./pic.png'));
    res.end('success');
  }).listen(8877);