import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"


const DashboardHomePage = async () => {

  const session = await getServerSession(authOptions) as any

  if (!session.user.role && !session.user.accountType) return redirect('/dashboard/welcome')

  return (
    <div>
      <h1>Dashboard Home</h1>
    </div>
  )
}

export default DashboardHomePage