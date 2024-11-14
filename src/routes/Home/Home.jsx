import teste from '../../assets/gatotriste.png'
import Carousel from '../../components/Carousel/Carousel'

import React from 'react'

const Home = () => {

  const slides = [
    {src: teste, alt: 'pic1'},
    {src: teste, alt: 'pic2'},
    {src: teste, alt: 'pic3'},
  ]

  return (
    <section>
      <div>Home</div>
      <Carousel slides={slides}/>
    </section>
  )
}

export default Home