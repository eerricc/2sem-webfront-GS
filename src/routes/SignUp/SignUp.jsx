import { useParams, useNavigate } from 'react-router-dom'
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
    <section className='bg-gradient-to-br from-[var(--yellow1)] via-[var(--blue2)] to-[var(--blue0)]
                          dark:from-[var(--gray2)] from-10% dark:via-[var(--gray3)] via-30% dark:to-[var(--gray3)] flex grow justify-center items-center '>
      
      <div className='mx-auto p-20 bg-[var(--gray1)] rounded-lg shadow-lg bg-form-bg dark:bg-dark-form-bg bg-cover bg-center'>
        <h1 className='text-3xl text-center mb-6 font-bold text-[var(--gray0)] dark:text-[var(--gray2)]'>Sign Up</h1>
        
        <form action="" onSubmit={handleSubmit} className='space-y-5 flex flex-col items-center'>

          <input 
            type="text"
            name="user" 
            placeholder='user'
            value={users.user}
            autoComplete='off'
            onChange={handleChange}
            className='w-full px-4 py-2 bg-[var(--gray0)] border border-[var(--gray2)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--yellow0)] dark:focus:ring-[var(--gray0)]'
          />

          <input 
            type="password"
            name='password'
            placeholder='password'
            autoComplete='off'
            value={users.password}
            onChange={handleChange}
            className='w-full px-4 py-2 bg-[var(--gray0)] border border-[var(--gray2)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--yellow0)] dark:focus:ring-[var(--gray0)]'
          />

          <button type='submit' className='btn text-[var(--gray0)] bg-[var(--green1)] hover:bg-[var(--green2)] dark:text-[var(--gray2)]'>Sign Up</button>

        </form>
      
      </div>
    </section>
  )
}

export default SignUp