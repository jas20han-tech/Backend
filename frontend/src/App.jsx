
import React, { useState } from 'react'
import axios from "axios"

const App = () => {

  // 1. Declare states at component level
  const [username, setUsername] = useState("")
  const [age, setAge] = useState("")
  const [city, setCity] = useState("")

  // 2. API function
  async function getRes() {

    try {
      const res = await axios.post("http://localhost:8000/", {
        params: {
          username,
          age,
          city
        }
      })

      console.log(res.data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>

      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="number"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        type="text"
        placeholder="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getRes}>Send</button>

    </div>
  )
}

export default App
