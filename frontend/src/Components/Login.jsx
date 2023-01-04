import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Login() {
  const [formData , setFormData] = useState({
    username:"",
    password:"",
  })

  const handleInput = (e)=>{
    const {value, name}= e.target;
    setFormData({
      ...formData, [name]:value
    })

  }


  const handleLogin =  async()=>{ 
    const {data} = await axios.post(`http://localhost:4000/auth/login`,
    formData
    )
    
    console.log(formData)


  }
  return (
    <div>


    <h1>Login</h1>

    <form>

    <input type="text" name='username' placeholder='Enter Usernam'  onChange={handleInput}/> <br />
    <input type="text" name='password' placeholder='Enter Password' onChange={handleInput} /> <br />
    <button type='submit' onClick={handleLogin}>Login</button> <br />

    </form>

    </div>
  )
}

export default Login