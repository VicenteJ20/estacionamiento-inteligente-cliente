import Link from "next/link"
import { FiArrowLeftCircle } from "react-icons/fi"

export const HeaderWelcome = ({ title, description, href }: { title: string, description?: string, href?: string }) => {
  return (
    <header className='flex flex-row gap-4 text-center'>
      {
        href && (<Link href={href} className='text-lg sm:text-4xl text-zinc-400 hover:text-blue-500 transition-all ease-in-out'><FiArrowLeftCircle /></Link>)
      }
      <div className='flex flex-col gap-4 items-center text-center'>
        <h1 className='text-xl sm:text-3xl font-semibold text-slate-900'>{title}</h1>
        <p className='text-lg lg:text-xl text-zinc-600'>{description}</p>
      </div>
    </header>
  )
}