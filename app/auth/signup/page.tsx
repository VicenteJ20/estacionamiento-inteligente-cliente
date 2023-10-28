import { SignUpForm } from "@/app/_components/auth/Signup"
import { CarouselSignUpInfo } from "@/app/_dictionaries/es-CL"

const SignUp = async () => {
  const { title } = CarouselSignUpInfo
  return (
    <section className='flex flex-col gap-20 px-8 justify-center relative'>
      {title}
      <SignUpForm />
      <footer className='text-center absolute bottom-5 right-0 left-0 text-zinc-600'>&copy; 2023 SmartParking. Todos los derechos reservados</footer>
    </section>
  )
}

export default SignUp