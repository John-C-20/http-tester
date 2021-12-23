const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url =='/') {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<html><body><p>hi</p></body></html')
        res.end() 
    }

    if (req.method == 'POST') {
        console.log('received POST request')
        req.on('data', chunk => console.log(chunk.toString()))
    }
}) 

server.listen(1997)

console.log('server listening on port 1997')

