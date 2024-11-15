import gato from '../../assets/gatotriste.png'

import React from 'react'

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center grow text-9xl font-bold h-screen w-screen'>
      Error
      <img src={gato} alt="gatotriste" className='rounded-3xl'/>
    </div>
  )
}

export default Error