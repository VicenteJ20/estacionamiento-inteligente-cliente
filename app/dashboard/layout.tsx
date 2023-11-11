import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import SessionProvider from '@/app/_components/dashboard/SessionProvider'
import Sidebar from "../_components/dashboard/Sidebar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: 'Smart Parking',
    template: `%s | Smart Parking`,
  },
  description: 'Bienvenido a Smartparking - Gestión de estacionamientos inteligente, eficiente y al alcance de todos.',
  keywords: ['NextJS13', 'Smart parking', 'Estacionamiento', 'Desarrollo', 'IoT', 'Sensores', 'Tecnología', 'AWS', 'Tutoriales']
}

const DashboardLayout = async ({
  children
}: {
  children: React.ReactNode
}) => {
  const session = await getServerSession(authOptions) as any

  if (!session) return redirect('/auth/signin')

  

  return (
    <SessionProvider session={session as any}>
      <section className='pl-[19rem] pr-[3rem] min-h-screen w-screen relative py-8'> 
        <Sidebar /> 
        {children}
      </section>

    </SessionProvider>
  )
}

export default DashboardLayout