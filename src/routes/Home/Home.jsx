import teste from '../../assets/gatotriste.png'
import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'
import Carousel from '../../components/Carousel/Carousel'

import React from 'react'

const Home = () => {

  const slides = [
    {src: teste, alt: 'pic1'},
    {src: pic1, alt: 'pic2'},
    {src: pic2, alt: 'pic3'},
  ]

  return (
    <section className='flex grow flex-col items-center bg-[var(--gray1)]'>
      <h1>Home</h1>
      <Carousel slides={slides}/>
    </section>
  )
}

export default Home