import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Iniciar sesión',
    description: 'Bienvenido a Smartparking - Gestión de estacionamientos inteligente, eficiente y al alcance de todos. Aquí podrá crear su cuenta en Smartparking.'
  }
}

const AuthDefaultPage = async () => {
  const session = await getServerSession(authOptions)

  if (!session) return redirect('/auth/signin')

  return redirect('/dashboard')
}

export default AuthDefaultPage