import { Link } from 'react-router-dom'

import Sun from '../../assets/sun.webp'

import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-between items-center mb-auto p-8'>
      <Link to='/'><img src={Sun} alt="sun" className='h-10'/></Link>
      <ul className='flex gap-4'>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/solution'>Solution</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </div>
  )
}

export default Nav