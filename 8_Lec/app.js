const http = require("http")

// const server = http.createServer((req, res) => {
    // if(req.url === "/") {
    // res.writeHead(200,{"content-type":"text/plain"})
    // res.end("Home Route")    
    // }else if(req.url === "/api/user"){
    //     const user = {
    //         name:"Arslan",
    //         age:20,
    //         email:"imArslan7061@gmail.com"
    //     }
    //     const data = JSON.stringify(user)
    //     console.log(JSON.parse(data))
    //     res.writeHead(200, {"content-type":"application/json"})
    //     res.end(data)
    // } else if(req.url === "/login") {
    //     res.writeHead(200,{"content-type":"text/plain"})
    //     res.end("Login Route") 
    // } else if(req.url === "/signup") {
    //     res.writeHead(200,{"content-type":"text/plain"})
    //     res.end("Signup Route") 
    // }else {
    //     res.writeHead(404,{"content-type":"text/html"})
    //     res.end("<h1>Page Not Found</h1>") 
    // }
// })


const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/submit") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString(); // Convert Buffer to String
        });

        req.on("end", () => {
            try {
                const data = JSON.parse(body); // Parse JSON safely
                console.log(data);

                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ success: true, message: "Account Created Successfully" }));
            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ success: false, message: "Invalid JSON" }));
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: false, message: "Not Found!" }));
    }
});

server.listen(3000, () => {
    console.log("Server is Listening on Port: 3000");
});
