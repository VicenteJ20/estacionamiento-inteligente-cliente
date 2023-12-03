import { BrandInfo } from "@/app/_dictionaries/es-CL"
import Image from "next/image"
import Template from "./template"
import Link from 'next/link'
import { ReduxProvider } from "@/app/_redux/provider"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { CloseClient } from "@/app/_components/dashboard/closeClient"

const WelcomeLayout = async ({
  children
}: {
  children: React.ReactNode
}) => {
  const session = await getServerSession(authOptions) as any
  const { title, icon } = BrandInfo


  
  return (
    <ReduxProvider>
      <section className='w-screen min-h-screen bg-blue-500  p-8 flex flex-col items-center justify-center absolute top-0 left-0 z-20'>
        <header className='flex flex-row gap-4 items-center absolute left-8 top-8'>
          <Image src={icon} alt={title} width={42} height={42} className='invert' />
          <h2 className='font-semibold text-xl text-white'>{title}</h2>
        </header>
        <Template>
          {
            session.user && session.user.status === 4 ? (
              <>
                <div className='text-center flex flex-col gap-4 my-20 items-center'>
                  <h2 className="font-semibold text-zinc-900 text-2xl">Su solicitud fue rechazada.</h2>
                  <p className='text-zinc-700'>Para más información, póngase en contacto con el administrador de la empresa. No se le permitirá hacer más solicitudes por este medio.</p>
                  <CloseClient />
                </div>
              </>
            ) : (
              <>
                {children}
              </>
            )
          }
          <footer className="text-center text-zinc-500 pb-4">Al continuar acepta las <Link className='text-blue-500 underline hover:text-zinc-800 transition-all duration-300 ease-in-out visited:text-purple-500' href='/legal/condiciones-de-uso'>Condiciones de uso</Link>, <Link className='text-blue-500 underline hover:text-zinc-800 transition-all duration-300 ease-in-out visited:text-purple-500' href='/legal/politica-de-privacidad'>política de privacidad</Link>, y <Link className='text-blue-500 underline hover:text-zinc-800 transition-all duration-300 ease-in-out visited:text-purple-500' href='/legal/politica-de-tratamiento-de-datos'>políticas de tratamiento de datos</Link>.</footer>
        </Template>
      </section>
    </ReduxProvider>
  )
}

export default WelcomeLayout