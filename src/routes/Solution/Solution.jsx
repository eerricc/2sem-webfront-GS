import esp32 from '../../assets/esp32.png'
import dashboard from '../../assets/dashboard.png'
import piegraph from '../../assets/piegraph.png'

import React from 'react'

const Solution = () => {
  return (
    <section className='flex grow flex-col items-center justify-center bg-[var(--gray1)] p-10'>
      <div className='flex flex-col justify-center items-center w-[80%] m-10'>
        <h1 className='text-3xl text-center m-10 font-bold text-[var(--gray2)]'>"Uma Solução Inteligente para um Mundo Sustentável"</h1>
        <p className='text-xl text-center font-semibold text-[var(--gray2)]'>Nossa solução combina tecnologia e simplicidade para transformar o modo como consumimos recursos naturais. Com um dispositivo inovador e um aplicativo intuitivo, ajudamos você a monitorar em tempo real o consumo de energia elétrica e água na sua residência. Nossa missão é empoderar os consumidores a tomarem decisões mais conscientes, reduzindo custos e promovendo um futuro mais sustentável.</p>
      </div>
      <div className='grid lg:grid-cols-3 gap-10 bg-[var(--gray1)] sm:w-2/3 lg:w-[80%]'>
        <div className='flex flex-col items-center justify-center bg-[var(--gray0)] p-10 rounded-3xl hover:shadow-inner hover:shadow-[var(--gray2)]'>
          <h1 className='text-xl text-center m-10 font-bold text-[var(--gray2)]'>Monitoramento Inteligente com ESP32</h1>
          <p className='text-lg text-center font-semibold text-[var(--gray2)]'>Nosso dispositivo utiliza o ESP32, um microcontrolador poderoso e eficiente, capaz de monitorar o consumo de energia elétrica e o fluxo de água em tempo real. Com design compacto e fácil instalação, ele pode ser integrado a qualquer ambiente doméstico.</p>
          <img src={esp32} alt="esp32" className='rounded-3xl w-1/3 h-auto m-5'/>
        </div>
        <div className='flex flex-col items-center justify-center bg-[var(--gray0)] p-10 rounded-3xl hover:shadow-inner hover:shadow-[var(--gray2)]'>
          <h1 className='text-xl text-center m-10 font-bold text-[var(--gray2)]'>Dashboard Intuitivo</h1>
          <p className='text-lg text-center font-semibold text-[var(--gray2)]'>Os dados coletados pelo dispositivo são enviados para um dashboard amigável e de fácil navegação. Nele, você pode visualizar gráficos em tempo real sobre o consumo de energia e água, identificar padrões e ajustar seu uso para economizar.</p>
          <img src={dashboard} alt="esp32" className='rounded-lg w-4/5 h-auto m-5'/>
        </div>
        <div className='flex flex-col items-center justify-center bg-[var(--gray0)] p-10 rounded-3xl hover:shadow-inner hover:shadow-[var(--gray2)]'>
          <h1 className='text-xl text-center m-10 font-bold text-[var(--gray2)]'>Gráficos e Insights</h1>
          <p className='text-lg text-center font-semibold text-[var(--gray2)]'>Para ajudar na tomada de decisão, nosso sistema gera gráficos detalhados, como um gráfico de pizza, que divide o consumo por categoria (cozinha, iluminação, etc.), permitindo uma análise mais precisa e eficiente.</p>
          <img src={piegraph} alt="esp32" className='rounded-lg w-4/5 h-auto m-5'/>
        </div>
      </div>
    </section>
  )
}

export default Solution