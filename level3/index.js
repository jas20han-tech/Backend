// import express from "express"

// const port = 8000
// const app = express()

// app.use(express.json())


// app.get("/",(req,res)=>{
//   res.json({name:"jashan",class:"12"})
// })

// app.post("/",(req,res)=>{
//   let body = req.body
//   console.log(body)
//   res.send("Hello")
// })

// app.listen((port),()=>{
//   console.log(`Server is started at ${port}`)
// })



import express from "express"

const port = 8000
const app = express()

app.use(express.json())

let users = [
  {
    "id": 1,
    "name": "Rahul Sharma",
    "position": "Software Engineer",
    "department": "IT",
    "salary": 75000
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "position": "HR Manager",
    "department": "Human Resources",
    "salary": 65000
  },
  {
    "id": 3,
    "name": "Aman Gupta",
    "position": "Data Analyst",
    "department": "Analytics",
    "salary": 60000
  },
  {
    "id": 4,
    "name": "Sneha Kapoor",
    "position": "Marketing Executive",
    "department": "Marketing",
    "salary": 50000
  },
  {
    "id": 5,
    "name": "Vikram Singh",
    "position": "Project Manager",
    "department": "Operations",
    "salary": 90000
  }
]

app.get('/user',(req,res)=>{
  res.json(users)
})

app.get('/user/:id',(req,res)=>{
  let id = req.params.id
  let exisitingUser = users.find((user)=>(user.id==id))
if(!exisitingUser){
  return res.send("404 not found")
}

  res.json(exisitingUser)
})

// http://localhost:8000/search?name=Jashan&age=21

app.get('/search',(req,res)=>{
  let query = req.query
  res.json(query)
})


app.listen(port,()=>{
  console.log(`Server is started at ${port}`)
})