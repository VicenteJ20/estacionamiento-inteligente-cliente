import Link from "next/link"

const Footer = () => {
  return (
    <section className='bg-stone-950'>
      <section className='max-w-7xl mx-auto py-24 min-h-[20rem] flex flex-rows justify-between gap-4 text-white'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-xl font-semibold'>
            <Link href='/' className='hover:text-cyan-600 transition-all duration-300 ease-in-out text-white'>
              Smart
              <span className='text-cyan-600'>Parking</span>
            </Link>
          </h2>
          <p>Software de gestión de estacionamiento al alcance de todos.</p>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='font-bold text-lg'>Sobre nosotros</h3>
          <ul className='flex flex-col gap-4'>
            <li>Inicio</li>
            <li>Características</li>
            <li>Precios</li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='font-bold text-lg'>Características</h3>
          <ul className='flex flex-col gap-4'>
            <li>¿Cómo funciona</li>
            <li>Política de privacidad</li>
            <li>Términos de servicio</li>
            <li>Política de reembolsos</li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='font-bold text-lg'>Enlaces de interés</h3>
          <ul className='flex flex-col gap-4'>
            <li>FAQ</li>
            <li>Soporte</li>
            <li>Acerca de</li>
          </ul>
        </div>
      </section>
    </section>
  )
}

export { Footer }