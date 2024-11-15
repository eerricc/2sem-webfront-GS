import { Link } from 'react-router-dom'
import Sun from '../../assets/sun.webp'
import React from 'react'
import {useState} from 'react'

const Nav = () => {
  
  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("user") ? true : false);

  const handleLogout = () => {
    sessionStorage.clear()
    setLoggedIn(false)
    alert("voce foi deslogado")
  };
  
  return (
    <div className='flex justify-between items-center mb-auto p-8 bg-[var(--gray2)]'>
      
      <Link to='/'><img src={Sun} alt="sun" className='h-10'/></Link>
      
      <ul className='flex gap-4'>
        
        <li><Link to='/about' className='btn text-[var(--gray2)] bg-[var(--green1)] hover:bg-[var(--green2)]'>About</Link></li>
        <li><Link to='/solution' className='btn text-[var(--gray2)] bg-[var(--blue1)] hover:bg-[var(--blue2)]'>Solution</Link></li>
        
        <li>
          {loggedIn ?           
          (<button 
            onClick={handleLogout}
            className='btn text-[var(--gray2)] bg-[var(--yellow0)] hover:bg-[var(--yellow1)]'>
            Logout
          </button>)
          :
          (<Link to='/login' className='btn text-[var(--gray2)] bg-[var(--yellow0)] hover:bg-[var(--yellow1)]'>Login</Link>) 
          }
        </li>

      </ul>

    </div>
  )
}

export default Nav