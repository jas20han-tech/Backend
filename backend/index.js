import express from "express"
import cors from "cors"


const app = express()


app.use(cors({
  "origin" : "http://localhost:5173"
}))

const port = 8000
app.use(express.json())

app.get('/',(req,res)=>{
  res.json({name:"Jashan",age:21})
})

app.post('/',(req,res)=>{
  console.log(req.body)
  res.send({success:true})
})

app.listen(port,()=>{
  console.log("Server is Started")
})