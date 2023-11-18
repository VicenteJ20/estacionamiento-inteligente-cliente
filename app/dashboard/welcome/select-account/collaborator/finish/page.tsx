'use client'

import { HeaderWelcome } from "@/app/_components/welcome/Header"
import { useSelector } from "react-redux"
import { askForAccess } from "@/app/_lib/welcome/createAccount"
import { useState } from "react"
import { Loading } from "@/app/_components/welcome/loading"
import { FiCheckCircle, FiXCircle } from "react-icons/fi"
import { Button } from "@nextui-org/react"
import { signOut } from "next-auth/react"

const FinishColabPage = () => {
  const [loading, setLoading] = useState(false)
  const [replaceInfo, setReplaceInfo] = useState(false)
  const [resOk, setResOk] = useState(false)
  const data = useSelector((state: any) => state.collabWelcome.data)

  async function handleConfirm() {
    setLoading(true)
    const res = await askForAccess(data.enterpriseId, data.type)

    if (res.status === 201) setResOk(true)
    if (res.status === 400 || res.status === 500) setResOk(false)

    setReplaceInfo(true)
    setLoading(false)

  }

  const handleRedirect = () => {
    signOut()
  }

  return (
    <article className='flex flex-col gap-10 lg:gap-20  justify-center relative'>
      <Loading loading={loading} />
      {
        replaceInfo ? (
          <>
            {
              resOk ? (
                <>
                  <FiCheckCircle className='text-green-500 text-9xl mx-auto' />
                  <HeaderWelcome title='Todo bien' description='Se ha enviado una solicitud al administrador de la empresa, debe esperar su aprobación para iniciar sesión en su cuenta.' />
                  <Button onClick={handleRedirect} variant='shadow' color='primary'>Volver al inicio</Button>
                </>
              ) : (
                <>
                  <FiXCircle className='text-red-500 text-9xl mx-auto' />
                  <HeaderWelcome title='Ocurrió un error' description="Ocurrió un error de nuestra parte, por favor intente registrar su empresa más tarde." />
                  <Button onClick={handleRedirect} variant='shadow' color='danger'>Volver al inicio</Button>
                </>
              )
            }
          </>
        ) : (
          <>
            <HeaderWelcome title='Este es un resumen de tu cuenta'
              description='Revise cuidadosamente la información, para finalizar la configuración presione el botón CONFIRMAR.' href='/dashboard/welcome/select-account/collaborator' />
            <ul className='px-8 flex flex-col gap-3 items-start justify-start'>
              <li className='flex flex-row gap-2 items-start'>
                <p className='font-semibold'>Tipo de cuenta:</p>
                <span>{data.type === 0 ? 'Administrativa' : 'Colaborador'}</span>
              </li>
              <li className='flex flex-row gap-2 items-start'>
                <p className='font-semibold'>Empresa selecionada:</p>
                <span>{data.enterpriseName}</span>
              </li>
              <li className='flex flex-col gap-3 items-start w-full '>
                <p className='font-semibold'>Mensaje:</p>
                <span className='max-h-[10rem] overflow-y-auto border border-zinc-300 rounded-md p-2'>{data.message}</span>
              </li>
            </ul>
            <div>
              <button onClick={handleConfirm} disabled={loading} className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 ease-in-out flex flex-row gap-2 items-center justify-center text-lg max-w-fit mx-auto'>Confirmar</button>
            </div>
          </>
        )
      }
    </article>
  )
}

export default FinishColabPage