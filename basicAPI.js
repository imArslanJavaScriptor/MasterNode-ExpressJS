import http from "http"
import { empData } from "./empData.js"



http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "application/json"})
    res.write(JSON.stringify(empData))
    res.end()
}).listen(1000)