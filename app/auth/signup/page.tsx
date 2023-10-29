import { SignUpForm } from "@/app/_components/auth/Signup"
import { CarouselSignUpInfo } from "@/app/_dictionaries/es-CL"

const SignUp = async () => {
  const { title, brand } = CarouselSignUpInfo
  return (
    <section className='flex flex-col gap-10 md:gap-20 px-8 md:py-10 justify-center relative pb-10 sm:mb-0'>
      <h1
      className='font-semibold text-zinc-800 text-3xl md:text-4xl text-center'
      >{title}<br /><span className='text-blue-500'>{brand}</span></h1>
      <SignUpForm />
      <footer className='text-center absolute bottom-0 pb-3 sm:pb-3 px-8 sm:bottom-5 right-0 left-0 text-zinc-600'>&copy; 2023 SmartParking. Todos los derechos reservados</footer>
    </section>
  )
}

export default SignUp