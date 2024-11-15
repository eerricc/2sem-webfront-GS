import { useParams, useNavigate } from 'raect-router-dom'
import { useState, useEffect } from 'react'

import React from 'react'

const SignUp = () => {
  
  let {id} = useParams();

  const [users, setUsers] = useState({
    id,
    user: '',
    password: '',
  });

  const navigate = useNavigate();

  let method = 'post';
  if(id){
    method = 'put';
  }

  const handleChange = (e) => {
    setUsers({...users, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/users/${id ? id: ''}`,{
      method: method,
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(users),
      }).then(() => {
        navigate('/')
        alert('parabens voce fez o signup')
      });
  }

  useEffect(() => {
    if(id){
      fetch(`http://localhost:5000/users/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data)
      });
    }
  }, [id])
  
  return (
    <section className='bg-gradient-to-br from-[var(--yellow1)] via-[var(--blue2)] via-[var(--blue0)] to-[var(--blue0)] flex grow justify-center items-center'>
      
      <div className='mx-auto p-20 bg-[var(--gray1)] rounded-lg shadow-lg bg-form-bg bg-cover bg-center'>
        <h1 className='text-3xl text-center mb-6 font-semibold text-[var(--gray0)]'>Sign Up</h1>
        
        <form action="" onSubmit={handleSubmit} className='space-y-4 flex flex-col items-center'>

          <input 
            type="text"
            name="user" 
            placeholder='user'
            value={users.user}
            onChange={handleChange}
            className='w-full px-4 py-2 bg-[var(--gray0)] border border-[var(--gray2)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--yellow0)]'
          />

          <input 
            type="password"
            name='password'
            placeholder='password'
            value={users.password}
            onChange={handleChange}
            className='w-full px-4 py-2 bg-[var(--gray0)] border border-[var(--gray2)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--yellow0)]'
          />

          <button type='submit' className='btn text-[var(--gray0)] bg-[var(--green1)] hover:bg-[var(--green2)]'>Sign Up</button>

        </form>
      
      </div>
    </section>
  )
}

export default SignUp