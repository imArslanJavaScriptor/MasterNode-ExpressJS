const http = require("http")
const path = require("path")
const fs = require("fs")

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/html"})
    // const filePath = __dirname + "/index.html"
    const filePath = path.join(__dirname, "index.html")
    const htmlContent = fs.readFileSync(filePath, "utf-8")

    res.end(htmlContent)
})

server.listen(3000 )