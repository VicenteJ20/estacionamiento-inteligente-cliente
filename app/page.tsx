import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function Home() {

  const session = await getServerSession(authOptions)

  if (!session) return (
    <h1>Sessión no iniciada</h1>
  )

  return redirect('/dashboard')
}
