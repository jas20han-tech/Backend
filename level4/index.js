import express from "express"

const port = 8000
const app = express()

app.use(express.json())



const password = process.env.LEVEL4_PASSWORD

// Custom Middleware

app.use((req,res,next)=>{
  if (!password) {
    return res.status(500).send("Server password is not configured")
  }
  if(req.body?.pass !== password){
    return res.status(401).send("Password does not match")
  }
  next()
})

app.get('/',(req,res)=>{
  res.json({name:"Jashan",age:21})
})

app.post('/',(req,res)=>{
  console.log(req.body)
  res.status(200).send({success:true})
})

app.listen(port,()=>{
  console.log("Server is started")
})