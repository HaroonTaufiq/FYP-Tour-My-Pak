import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



export default function Login() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: null,
    password: null
  })

  useEffect(() => {
    localStorage.getItem("user") &&    JSON.parse(localStorage.getItem('user')).email!=='admin@test.com' && JSON.parse(localStorage.getItem('user')).password!=='admin1234' && navigate('/')
  }, [])
  useEffect(() => {
    localStorage.getItem("user") &&    JSON.parse(localStorage.getItem('user')).email=='admin@test.com' && JSON.parse(localStorage.getItem('user')).password=='admin1234' && navigate('/admin')
  }, [])
  function login() {
    fetch("http://localhost:4000/login", {
      method: "post",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(state)
    }).then((resp) => {
      resp.json().then((result) => {
        console.log(result)
        if(result.name){
          localStorage.setItem('user',JSON.stringify(result))
          navigate("/")
        }
        if(result.result){
          alert(result.result)
        }
      
      })
    })
  }
  return (
    <div>
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <div className="max-w-md mx-auto">
          <input  type='text' placeholder='Enter Email' onChange={(event) => setState((prevState) => ({ ...prevState, email: event.target.value }))}></input>
          <input  type='password' placeholder='Enter Password' onChange={(event) => setState((prevState) => ({ ...prevState, password: event.target.value }))}></input>
          <button className='primary' onClick={() => login()}>Login</button>
          <div className="text-center py-2 text-gray-500">
            Do not have a account? <Link className="underline text-black" to={'/login'}>Signup</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
