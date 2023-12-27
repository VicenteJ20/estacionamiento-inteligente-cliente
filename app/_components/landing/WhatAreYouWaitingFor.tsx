import Link from "next/link"

const WhatAreaYouWaitingForPage = () => {
  return (
    <section className='bg-teal-500'>
      <section className='max-w-7xl mx-auto py-24 min-h-[20rem] flex flex-col items-center gap-4'>
        <article className='flex flex-col gap-4 w-full text-center'>
          <h2 className='text-4xl font-bold text-white'>¿Qué estás esperando?</h2>
          <h3 className='text-3xl font-medium text-white'>¡Regístrate ahora!</h3>
          <p className='text-white text-lg font-normal'>Escoge el plan más adecuado para tu negocio, con asistencia de nuestros profesionales.</p>
        </article>
        <Link href='/dashboard' className='bg-yellow-400 border block my-4 border-yellow-600 py-2 px-4 rounded-sm transition-all duration-300 ease-in-out hover:bg-teal-800 hover:text-white'>Registrarse</Link>
      </section>
    </section>
  )
}

export { WhatAreaYouWaitingForPage }