import { Link } from 'react-router-dom'
import Sun from '../../assets/sun.webp'
import React from 'react'
import {useState, useEffect } from 'react'

const Nav = () => {
  
  const getUser = sessionStorage.getItem("user")

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users/')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = () => {
    const userToDelete = users.find((user) => user.user === getUser);
    if (!userToDelete) {
      alert("Usuário não encontrado.");
      return;
    }

    fetch(`http://localhost:5000/users/${userToDelete.id}`, {
      method: "DELETE",
    })
      .then(() => {
        sessionStorage.clear(); 
        window.location.reload();
        alert("Usuário deletado e deslogado com sucesso.");
      })
      .catch((error) => console.log(error));
  };
  
  return (
    <div className='flex justify-between items-center mb-auto p-8 bg-[var(--gray2)]'>
      
      <Link to='/'><img src={Sun} alt="sun" className='h-10'/></Link>
      
      <ul className='flex gap-4'>
        
        <li><Link to='/about' className='btn text-[var(--gray2)] bg-[var(--green1)] hover:bg-[var(--green2)]'>About</Link></li>
        <li><Link to='/solution' className='btn text-[var(--gray2)] bg-[var(--blue1)] hover:bg-[var(--blue2)]'>Solution</Link></li>
        <li>
          {getUser ? 
          ( <button onClick={handleDelete} className='btn text-[var(--gray2)] bg-[var(--yellow0)] hover:bg-[var(--yellow1)]'>logout</button> ) : 
          (<Link to='/login' className='btn text-[var(--gray2)] bg-[var(--yellow0)] hover:bg-[var(--yellow1)]'>Login</Link>)}
        </li>

      </ul>

    </div>
  )
}

export default Nav