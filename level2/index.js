import express from "express"

const app = express()
const port = 8000


// app.get("/",(req,res)=>{
//   res.send("Hello My name is Jashan")
// })

app.get("/",(req,res)=>{
  res.json({name:"Jashan",class:"12"})
})

app.get("/about",(req,res)=>{
  res.send("About")
})

app.get("/contact",(req,res)=>{
  res.send("contact")
})

app.listen(port,()=>{
  console.log(`Server is Started at ${port}`)
})