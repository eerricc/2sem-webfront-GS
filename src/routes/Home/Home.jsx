import ecohouse from '../../assets/ecohouse.png'
import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'
import Carousel from '../../components/Carousel/Carousel'

import React from 'react'

const Home = () => {

  const slides = [
    {src: ecohouse, alt: 'pic1'},
    {src: pic1, alt: 'pic2'},
    {src: pic2, alt: 'pic3'},
  ]

  return (
    <section className='flex grow flex-col items-center bg-[var(--gray1)]'>
      <h1 className='text-3xl text-center m-10 font-bold text-[var(--gray2)]'>Transforme Seu Consumo, Transforme o Mundo</h1>
      <Carousel slides={slides}/>
      <p className='w-[80%] text-1xl text-center m-12 font-semibold text-[var(--gray2)]'>A mudança começa em sua casa. Ao tomar decisões mais conscientes sobre o consumo de energia e água, você não só está economizando, mas também ajudando a construir um futuro mais sustentável para todos. Em um mundo onde os recursos naturais estão se tornando cada vez mais escassos, cada pequena ação conta.

Com a nossa solução inteligente, você pode monitorar e otimizar o uso de energia e água em sua residência de forma simples e eficaz. Ao reduzir o desperdício, você não apenas diminui suas contas, mas também contribui para a preservação do meio ambiente, minimizando sua pegada de carbono.

Acreditamos que a verdadeira transformação começa com a conscientização e a responsabilidade. Juntos, podemos criar um futuro mais verde e sustentável. Não importa o tamanho da mudança, o importante é começar.</p>
    <p className='text-1xl text-center font-bold text-[var(--gray2)]'>Seja parte dessa transformação. Transforme seu consumo, transforme o mundo.</p>
    </section>
  )
}

export default Home