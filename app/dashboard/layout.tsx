import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import SessionProvider from '@/app/_components/dashboard/SessionProvider'

const DashboardLayout = async ({
  children
}: {
  children: React.ReactNode
}) => {
  const session = await getServerSession(authOptions) as any

  if (!session) return redirect('/auth/signin')

  return (
    <SessionProvider session={session as any}>
      {children}
    </SessionProvider>
  )
}

export default DashboardLayout