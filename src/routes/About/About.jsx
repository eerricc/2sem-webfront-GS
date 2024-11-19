

import React from 'react'

const About = () => {
  return (
    <section className='flex grow flex-col items-center justify-center bg-[var(--gray1)]'>
      <div className='grid lg:grid-cols-3 gap-10 bg-[var(--gray1)] sm:w-2/3 lg:w-[80%]'>
        <div className='flex flex-col items-center justify-center bg-[var(--gray0)] p-10 rounded-3xl hover:shadow-2xl hover:shadow-[var(--green1)]'>
          <h1 className='text-3xl text-center m-10 font-bold text-[var(--gray2)]'>Nossa Missão e Visão</h1>
          <p className='text-xl text-center font-semibold text-[var(--gray2)]'>Nosso projeto tem como missão ajudar as pessoas a reduzirem seu impacto ambiental, promovendo o uso eficiente de recursos naturais, como energia elétrica e água. Através de uma solução tecnológica simples e acessível, buscamos empoderar os consumidores a adotar práticas mais sustentáveis no dia a dia, criando um futuro mais verde e consciente.</p>
        </div>
        <div className='flex flex-col items-center justify-center bg-[var(--gray0)] p-10 rounded-3xl hover:shadow-2xl hover:shadow-[var(--blue1)]'>
        <h1 className='text-3xl text-center m-10 font-bold text-[var(--gray2)]'>O Que Fazemos</h1>
        <p className='text-xl text-center font-semibold text-[var(--gray2)]'>Desenvolvemos um dispositivo inteligente para monitorar o consumo de energia e água nas residências. Através de dados em tempo real, fornecemos insights para que os usuários possam otimizar seu uso de recursos, reduzir desperdícios e, ao mesmo tempo, economizar nas contas. O dispositivo é integrado a um aplicativo que facilita o acompanhamento e a tomada de decisões mais sustentáveis.</p>
        </div>
        <div className='flex flex-col items-center justify-center bg-[var(--gray0)] p-10 rounded-3xl hover:shadow-2xl hover:shadow-[var(--yellow0)]'>
        <h1 className='text-3xl text-center m-10 font-bold text-[var(--gray2)]'>Nosso Compromisso com a Sustentabilidade</h1>
        <p className='text-xl text-center font-semibold text-[var(--gray2)]'>Nosso compromisso vai além da tecnologia: queremos promover uma mudança real no comportamento das pessoas. Ao incentivar escolhas mais conscientes, ajudamos a preservar os recursos naturais e a reduzir os impactos ambientais. Estamos continuamente inovando para melhorar nossa solução e expandir seu alcance, para que todos possam fazer parte da transformação sustentável.</p>
        </div>
      </div>
    </section>
  )
}

export default About