import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

const AuthDefaultPage = async () => {
  const session = await getServerSession(authOptions)

  if (!session) redirect('/auth/signin')

  redirect('/dashboard')
}

export default AuthDefaultPage