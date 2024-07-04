const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    fs.writeFile('welcome.txt',"hello node",function(err) {
        if (err) {
            return console.error(err);
        }
    })
    fs.readFile('welcome.txt','utf8',(err,data) => {
        if (err) console.log(err) 
        else console.log(data)

    })
})
server.listen(3000)