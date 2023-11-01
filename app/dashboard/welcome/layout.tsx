import { BrandInfo } from "@/app/_dictionaries/es-CL"
import Image from "next/image"
import Template from "./template"
import Link from 'next/link'

const WelcomeLayout = async ({
  children
}: {
  children: React.ReactNode
}) => {

  const { title, icon } = BrandInfo
  return (
    <section className='w-screen min-h-screen bg-blue-500 relative p-8 flex flex-col items-center justify-center'>
      <header className='flex flex-row gap-4 items-center absolute left-8 top-8'>
        <Image src={icon} alt={title} width={42} height={42} className='invert' />
        <h2 className='font-semibold text-xl text-white'>{title}</h2>
      </header>
      <Template>
        {children}
        <footer className="text-center text-zinc-500 pb-4">Al continuar acepta las <Link className='text-blue-500 underline hover:text-zinc-800 transition-all duration-300 ease-in-out visited:text-purple-500' href='/legal/condiciones-de-uso'>Condiciones de uso</Link>, <Link className='text-blue-500 underline hover:text-zinc-800 transition-all duration-300 ease-in-out visited:text-purple-500' href='/legal/politica-de-privacidad'>política de privacidad</Link>, y <Link className='text-blue-500 underline hover:text-zinc-800 transition-all duration-300 ease-in-out visited:text-purple-500' href='/legal/politica-de-tratamiento-de-datos'>políticas de tratamiento de datos</Link>.</footer>
      </Template>
    </section>
  )
}

export default WelcomeLayout