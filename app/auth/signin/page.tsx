import { LoginForm } from "@/app/_components/auth/Login"
import { CarouselLogIninfo } from "@/app/_dictionaries/es-CL"

const SignInPage = () => {
  const { title, brand } = CarouselLogIninfo
  return (
    <section className='flex flex-col gap-16 px-8 justify-center relative'>
      <h1
      className='font-semibold text-zinc-800 text-3xl md:text-4xl text-center'
      >{title}<br /><span className='text-blue-500'>{brand}</span></h1>
      <LoginForm />
      <footer className='text-center absolute bottom-5 right-0 left-0 text-zinc-600'>&copy; 2023 SmartParking. Todos los derechos reservados</footer>
    </section>
  )
}

export default SignInPage