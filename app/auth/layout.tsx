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
    <main className='w-full min-h-screen p-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
      <CarouselAuth />
      {children}
    </main>
  )
}

export default AuthLayout