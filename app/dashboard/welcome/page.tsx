'use client'

import { HeaderWelcome } from "@/app/_components/welcome/Header"
import { WelcomeInfo } from "@/app/_dictionaries/es-CL"
import Image from "next/image"
import { FiArrowRightCircle } from "react-icons/fi"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"


const WelcomePage = () => {
  const [loading, setLoading] = useState(true)
  const [pending, setPending] = useState(true)
  const session = useSession() as any

  const { title, description, imageUrl, nextPage } = WelcomeInfo
  const id = session?.data?.user?.id

  useEffect(() => {
    async function checkRequest(id: string) {
      try {
        console.log('Enviando solicitud de bienvenida')
        const res = await fetch('/api/request', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id })
        })
        const data = await res.json()

        if (res.status === 200) {
          if (data?.data?.status === null || data?.data?.managedBy === null || data?.data?.pending === true) {
            setPending(true)
          }
          else setPending(false)
        }
        else setPending(false)


        setLoading(false)
      } catch (err: any) {
        console.error(err)
      }
    }

    if (id) checkRequest(id)
  }, [id])

  return (
    <article className='flex flex-col gap-10 lg:gap-20 items-center justify-center'>
      <Image src={imageUrl} alt={title} width={200} height={200} className='mx-auto' />
      <div className='flex flex-col gap-8'>
        {
          !loading ? (
            <>
              {
                !pending && (
                  <>
                    <HeaderWelcome title={title} description={description} />
                    <Link href={nextPage}
                      className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 ease-in-out flex flex-row gap-2 items-center justify-center text-lg max-w-fit mx-auto'
                    >Continuar <FiArrowRightCircle /></Link>
                  </>
                )
              }
              {
                pending && (
                  <HeaderWelcome title={'Estamos procesando su solicitud'} description={'Cuando su solicitud sea atendida por la administración de la empresa a la que solcitó acceso, le enviaremos un correo informándo del resultado de la solicitud.'} />
                )
              }
            </>
          ) : (
            <HeaderWelcome title={'Cargando...'} description={'Estamos procesando su solicitud.'} />
          )
        }

      </div>
    </article >
  )
}

export default WelcomePage