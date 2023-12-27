import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {
  return (
    <section className='pt-52 flex flex-col gap-4 items-center min-h-[65vh] justify-center bg-stone-950 relative'>
      <div className='2xl:max-w-[40%] max-w-[60%] flex flex-col gap-6'>
        <h1 className='text-5xl font-bold text-center text-white'>Un estacionamiento inteligente<br />al alcance de todos</h1>
        <p className='text-lg text-center text-zinc-100'>SmartParking es un sistema de estacionamiento seguro y eficiente al alcance de todos, ya que cuenta con un sistema adaptable a cualquier tamaño y tipo de estacionamiento.</p>
        <div className='mx-auto flex flex-row gap-4 items-center'>
          <Link href='/dashboard' className='bg-cyan-700 hover:bg-cyan-600 text-white py-2 px-4 rounded-sm transition-all duration-300 ease-in-out'>
            Iniciar sesión
          </Link>
          <Link href='/dashboard' className='bg-white border border-zinc-400 py-2 px-4 rounded-sm transition-all duration-300 ease-in-out hover:bg-zinc-800 hover:text-white'>Registrarse</Link>
        </div>
        <section className='my-8 h-96 relative'>
          <Image
            src='/landing/hero3.png'
            alt='Hero'
            className='absolute top-0 left-1/2 w-full h-fit max-w-[90%] mx-auto object-contain rounded-md shadow-lg shadow-zinc-600 transform -translate-x-1/2'
            width={1560}
            height={1200}
          />
        </section>
      </div>
    </section>
  )
}

export { HeroSection }