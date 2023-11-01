import { HeaderWelcome } from "@/app/_components/welcome/Header"
import { WelcomeInfo } from "@/app/_dictionaries/es-CL"
import Image from "next/image"
import { FiArrowRightCircle } from "react-icons/fi"
import Link from "next/link"

const WelcomePage = () => {
  const { title, description, imageUrl, nextPage } = WelcomeInfo
  return (
    <article className='flex flex-col gap-10 lg:gap-20 items-center justify-center'>
      <Image src={imageUrl} alt={title} width={200} height={200} className='mx-auto' />
      <div className='flex flex-col gap-8'>
        <HeaderWelcome title={title} description={description} />
        <Link href={nextPage}
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 ease-in-out flex flex-row gap-2 items-center justify-center text-lg max-w-fit mx-auto'
        >Continuar <FiArrowRightCircle /></Link></div>
    </article>
  )
}

export default WelcomePage