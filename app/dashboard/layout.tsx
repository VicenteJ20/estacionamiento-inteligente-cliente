import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import SessionProvider from '@/app/_components/dashboard/SessionProvider'
import type { Metadata } from "next"
import { ReduxProvider } from "../_redux/provider"
import SideBar from "../_components/Sidebar/Sidebar"
import MarginWithWrapper from "../_components/Sidebar/MarginWidthWrapper"
import { HeaderMobile } from "../_components/Sidebar/HeaderMobile"
import { HeaderDesktop } from "../_components/Sidebar/HeaderDesktop"
import Wrapper from "../_components/Sidebar/Wrapper"

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
      <ReduxProvider>
        <section className='flex'>
          <SideBar />
          <div className='flex-1'>
            <MarginWithWrapper>
              <HeaderDesktop />
              <HeaderMobile />
              <Wrapper>
                {children}
              </Wrapper>
            </MarginWithWrapper>
          </div>
        </section>
      </ReduxProvider>

    </SessionProvider>
  )
}

export default DashboardLayout