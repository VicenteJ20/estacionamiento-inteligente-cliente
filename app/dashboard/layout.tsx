import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import SessionProvider from '@/app/_components/dashboard/SessionProvider'
import Sidebar from "../_components/dashboard/Sidebar"

const DashboardLayout = async ({
  children
}: {
  children: React.ReactNode
}) => {
  const session = await getServerSession(authOptions) as any

  if (!session) return redirect('/auth/signin')

  return (
    <SessionProvider session={session as any}>
      <section className='pl-[22rem] min-h-screen w-screen relative p-8'> 
        <Sidebar /> 
        {children}
      </section>

    </SessionProvider>
  )
}

export default DashboardLayout