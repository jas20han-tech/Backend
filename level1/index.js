// How to Make Server


// import http from "http"

// const server = http.createServer((req,res)=>{
//   res.end("Welcome to my Server")
// })

// server.listen(8000,()=>{
//   console.log("Server is Started")
// })




// Routing in Server

import http from "http"

const port = 8000

const server = http.createServer((req,res)=>{
  if(req.url=='/'){
    res.end("Welcome to Home Page")
  }
  else if(req.url == '/about'){
    res.end("Welcome to about route")
  }
  else if(req.url == '/contact'){
    res.end("Welcome to contact route")
  }
  else{
    res.end("404 Not Found")
  }
})

server.listen(port,()=>{
  console.log("Server is Listened")
})