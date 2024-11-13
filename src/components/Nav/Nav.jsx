import { Link } from 'react-router-dom'

import Sun from '../../assets/sun.webp'

import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-between items-center mb-auto p-8 bg-[var(--gray2)]'>
      <Link to='/'><img src={Sun} alt="sun" className='h-10'/></Link>
      <ul className='flex gap-4'>
        <li><Link to='/about' className='btn text-[var(--gray0)] bg-[var(--green1)] hover:bg-[var(--green2)] transition-colors'>About</Link></li>
        <li><Link to='/solution' className='btn text-[var(--gray0)] bg-[var(--blue1)] hover:bg-[var(--blue2)] transition-colors'>Solution</Link></li>
        <li><Link to='/login' className='btn text-[var(--gray0)] bg-[var(--yellow0)] hover:bg-[var(--yellow1)] transition-colors'>Login</Link></li>
      </ul>
    </div>
  )
}

export default Nav