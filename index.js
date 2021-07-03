// Importing the necessary modules
const http = require("http")
const fs = require("fs")  

// Server-related constants
const hostname = "127.0.0.1"
const port = 8082

// Creating a server to handle the routes
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader = { "Content-Type": "text/html"}


    let htmlFileDirecotryPath = "./views/"
    let htmlFilePath;


    // Handling the redirect of route /about-us to /about
    if(req.url === "/about-us"){
        req.url = "/about"
    }




    // Displaying views based on the routes
    if(req.url === "/" || req.url ==="/home"){
        htmlFilePath = htmlFileDirecotryPath + "index.html"
    } 
    else if(req.url === "/about"){
        htmlFilePath = htmlFileDirecotryPath + "about.html"
    } 
    else if(req.url === "/contact"){
        htmlFilePath = htmlFileDirecotryPath + "contact.html"
    } 
    else{
        htmlFilePath = htmlFileDirecotryPath + "error.html"
    }


    // Reading from whichever file that satisfies the condition above
    fs.readFile(htmlFilePath, (err, data) => {
        if (err) return;

        res.end(data)
    })

})

// Listen to the server on the port 8082 specified above
server.listen(port, hostname, (error) => {
    console.log("Working...")
})



