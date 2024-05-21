import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {createUserWithEmailAndPassword} from "firebase/auth"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




const Signup = () => {
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNnRaNm8LSWJcwseANwYWxXd7UNSXaoFo",
  authDomain: "fir-d7c90.firebaseapp.com",
  projectId: "fir-d7c90",
  storageBucket: "fir-d7c90.appspot.com",
  messagingSenderId: "579090468562",
  appId: "1:579090468562:web:63c369327a7dffd087a70b",
  measurementId: "G-7LBK1668RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth=getAuth(app)




  useEffect(() => {
    window.scrollTo(0, 0)
    
  }, [])
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: null,
    email: null,
    password: null
  })
  useEffect(() => {
    localStorage.getItem("user") && JSON.parse(localStorage.getItem('user')).email!=='admin@test.com' && JSON.parse(localStorage.getItem('user')).password!=='admin1234' && navigate('/')
  }, [])
  useEffect(() => {
    localStorage.getItem("user") && JSON.parse(localStorage.getItem('user')).email=='admin@test.com' && JSON.parse(localStorage.getItem('user')).password=='admin1234' && navigate('/admin')
  }, [])

 
  function register() {
    createUserWithEmailAndPassword(auth,state.email,state.password).then((userCredential)=>{
    fetch("http://localhost:4000/signup", {
      method: "post",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(state)
    }).then((resp) => {
      resp.json().then((result) => {
        if (result.name) {
          console.log("resulyt",result)
          if (result.name == "Admin") {
           
              alert("signup success")
              localStorage.setItem('user', JSON.stringify(result))
              navigate('/admin')
              console.log(userCredential);
           
            
           
           
          }
         
          if (result.name!="Admin") 
          {
            
            alert("signup success")
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/')
            console.log(userCredential);
        
         }
          
          // alert("signup success")
          // localStorage.setItem('user', JSON.stringify(result))
          // navigate('/')

        } else {
          alert(result.result)
        }


      })
    })
  }).catch((e=>{
    console.log(e);
    alert(e);
   }))

   
  }
  return (
    <div>
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <div className="max-w-md mx-auto">
          <input  type='text' placeholder='Enter Name'
            onChange={(event) => setState((prevState: any) => ({ ...prevState, name: event.target.value }))}></input>
          <input  type='text' placeholder='Enter Email' onChange={(event) => setState((prevState: any) => ({ ...prevState, email: event.target.value }))}></input>
          <input  type='password' placeholder='Enter Password' onChange={(event) => setState((prevState: any) => ({ ...prevState, password: event.target.value }))}></input>
          <button className='primary' onClick={() => register()}>Sign up</button>
          <div className="text-center py-2 text-gray-500">
            Already a member? <Link className="underline text-black" to={'/login'}>Login</Link>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}
export default Signup;