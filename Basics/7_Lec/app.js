const http = require("http")

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/plain"})
    res.end("Hello Mera Server Chal Raha ha")
})

server.listen(3000, () => {
  console.log(`Server is Listening on Port: 3000`)  
})