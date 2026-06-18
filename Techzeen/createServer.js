const http = require("http");

const PORT = 2000;

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type':'text/html'})
//     if(req.url === "/about") {
//         res.write("<h2>About Page</h2>")

//         res.end();
//     } else {
//         res.write("<h2>Hello World</h2>")
//         res.end();
//     }
// }).listen(PORT)

// Function as a Parameter
function callBackFn(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h2>Hello From Node.js</h2>");
  res.end();
}
http.createServer(callBackFn).listen(PORT);
