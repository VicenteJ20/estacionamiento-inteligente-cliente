import { LoginForm } from "@/app/_components/auth/Login"
import { CarouselLogIninfo } from "@/app/_dictionaries/es-CL"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Iniciar sesión',
    description: 'Bienvenido a Smartparking - Gestión de estacionamientos inteligente, eficiente y al alcance de todos. Aquí podrá iniciar sesión en su cuenta de Smartparking.'
  }
}

const SignInPage = () => {
  const { title, brand } = CarouselLogIninfo
  return (
    <section className='flex flex-col gap-16 px-8 justify-center relative'>
      <h1
      className='font-semibold text-zinc-800 text-3xl md:text-4xl text-center'
      >{title}<br /><span className='text-blue-500'>{brand}</span></h1>
      <LoginForm />
    </section>
  )
}

export default SignInPage