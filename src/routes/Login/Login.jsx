import {useRef, useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'

import React from 'react'

const Login = () => {
  
  const user = useRef();
  const password = useRef();

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  function validate(){
    for(let i = 0; i < users.length; i++){
      if(
        users[i].user == user.current.value && 
        users[i].password == password.current.value)
        {
        return true;
        }
    }
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(validate()){
      let token = 
        Math.random().toString(16).substring(2) + 
        Math.random().toString(16).substring(2)
        sessionStorage.setItem("user", user.current.value);
        sessionStorage.setItem("password", token);

        const event = new Event("loginChange");
        window.dispatchEvent(event);

        navigate('/')
        alert("parabens voce fez o login")
    } else{
      alert("user/password invalid")
    }
  }

  useEffect(()=>{
    fetch("http://localhost:5000/users/")
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      setUsers(res)
    })
  },[])

  return (
      <section className='bg-gradient-to-br from-[var(--yellow1)] via-[var(--blue2)] via-[var(--blue0)] to-[var(--blue0)] flex grow justify-center items-center '>
        
        <div className='mx-auto p-20 bg-[var(--gray1)] rounded-lg shadow-lg bg-form-bg bg-cover bg-center'>
          <h1 className='text-3xl text-center mb-6 font-semibold text-[var(--gray0)]'>Login</h1>
          
          <form action="" onSubmit={handleSubmit} className='space-y-4 flex flex-col items-center'>
            
            <input 
              type="text" 
              id='user'
              className='w-full px-4 py-2 bg-[var(--gray0)] border border-[var(--gray2)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--yellow0)]'
              placeholder='user'
              ref={user}/>
              
            
            <input
              type="text" 
              id='password'
              className='w-full px-4 py-2 bg-[var(--gray0)] border border-[var(--gray2)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--yellow0)]'
              placeholder='password'
              ref={password}/>
            
            <button className='btn text-[var(--gray0)] bg-[var(--green1)] hover:bg-[var(--green2)]'>Login</button>
            
            <Link to='/signup' className='btn text-[var(--blue0)] hover:text-[var(--blue2)] bg-[var(--blue2)] hover:bg-[var(--blue0)]'>Create an account</Link>

          </form>
        
        </div>
      </section>
  )
}
export default Login