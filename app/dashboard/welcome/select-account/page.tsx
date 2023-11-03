'use client'

import { HeaderWelcome } from "@/app/_components/welcome/Header"
import { WelcomeSelectAccount } from "@/app/_dictionaries/es-CL"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { setType } from "@/app/_redux/slices/adminSlice"
import { setType as setTypeCollab } from "@/app/_redux/slices/collabSlice"

const SelectAccount = () => {
  const { title, cards, oldPage } = WelcomeSelectAccount


  const dispatch = useDispatch()

  const handleClick = (target: boolean) => {
    target ? dispatch(setTypeCollab(target)) : dispatch(setType(target))
  }

  return (
    <article className='flex flex-col gap-10 lg:gap-20 items-center justify-center'>
      <HeaderWelcome title={title} href={oldPage} />
      <ul className='flex flex-col gap-4'>
        {
          cards && cards.map((item, index) => (
            <li key={index} onClick={() => handleClick(item.type)}>
              <Link href={item.nextPage} className={`border-2 text-start ${item.type ? 'border-blue-500' : 'border-zinc-300'} rounded-md p-4 pr-12 flex flex-col gap-2 relative w-full shadow-md hover:opacity-50 transition-all duration-300 ease-in-out`}>
                <h3 className={`font-semibold text-lg lg:text-xl ${item.type ? 'text-blue-500': 'text-zinc-700'}`}>{item.title}</h3>
                <p className='font-normal text-md text-zinc-500'>{item.description}</p>
              </Link>
            </li>
          ))
        }
      </ul>
    </article>
  )
}

export default SelectAccount