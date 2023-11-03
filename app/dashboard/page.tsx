import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import Sidebar from "../_components/dashboard/Sidebar"


const DashboardHomePage = async () => {

  const session = await getServerSession(authOptions) as any

  if (!session.user.role && !session.user.accountType) return redirect('/dashboard/welcome')

  return (
    <div>
      <h2>Dashboard Home</h2>
    </div>
  )
}

export default DashboardHomePage