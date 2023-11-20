'use client'

import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation"

interface NotFoundProps {
  title: string,
  description: string,
  redirect: string
}


const NotFoundItem = ({ title, description, redirect}: NotFoundProps) => {

  const router = useRouter()

  const handlerRedirect = () => {
    return router.push(redirect)
  }

  return (
    <div className='flex flex-col gap-4 items-center justify-center my-[25%]'>
      <h1 className='text-2xl font-semibold text-blue-800'>{title}</h1>
      <p className='xl:max-w-[50%] font-base text-center text-zinc-700'>{description}</p>
      <Button variant='solid' radius='sm' size="md" color='secondary' type="button" onClick={handlerRedirect}>Volver</Button>
    </div>
  )
}

export { NotFoundItem }