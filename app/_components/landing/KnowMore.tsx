import Link from "next/link"
import { HeaderLanding } from "./HeaderLanding"
import Image from "next/image"

const KnowMore = () => {
  return (
    <section className='bg-zinc-50'>
      <section className='max-w-7xl mx-auto py-24 min-h-[42rem] flex flex-row items-center gap-4'>
        <div className='flex flex-col gap-4'>
          <HeaderLanding
            overtitle='¿Cómo funciona?'
            title='Tecnología de punta a tu alcance'
            description='El foco principal de SmartParking es brindar tecnología de punta a cualquier estacionamiento, ofreciendo capacidad de adaptabilidad en cualquier momento y lugar, garantizando la seguridad de tu estacionamiento y de tus clientes.'
          />
          <Link href='/dashboard' className='bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-md transition-all duration-300 ease-in-out block w-fit'>
            Ir al servicio
          </Link>
        </div>
        <div>
          <Image src='https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Hero' className='w-full h-fit max-w-[100%] mx-auto border-4 object-contain rounded-md shadow-lg' width={900} height={600} />
        </div>
      </section>
    </section>
  )
}

export { KnowMore }