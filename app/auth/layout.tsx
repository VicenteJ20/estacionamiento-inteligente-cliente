import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { CarouselAuth } from "../_components/auth/Carousel"

const AuthLayout = async ({
  children
}: {
  children: React.ReactNode
}) => {
  const session = await getServerSession(authOptions)

  if (session) redirect('/dashboard')

  return (
    <main className='w-full min-h-screen md:p-5 grid grid-cols-1 md:grid-cols-2 gap-x-5'>
      <CarouselAuth />
      <section className='w-full h-full flex flex-col gap-2 justify-center relative pb-6'>
        {children}
        <footer className='text-center absolute  bottom-1 right-0 left-0 text-zinc-600'>&copy; 2023 SmartParking. Todos los derechos reservados</footer>
      </section>
    </main>
  )
}

export default AuthLayout