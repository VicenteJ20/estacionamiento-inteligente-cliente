import { LoginForm } from "@/app/_components/auth/Login"
import { CarouselLogIninfo } from "@/app/_dictionaries/es-CL"

const SignInPage = () => {
  const { title } = CarouselLogIninfo
  return (
    <section className='flex flex-col gap-20 px-8 justify-center relative'>
      {title}
      <LoginForm />
      <footer className='text-center absolute bottom-5 right-0 left-0 text-zinc-600'>&copy; 2023 SmartParking. Todos los derechos reservados</footer>
    </section>
  )
}

export default SignInPage