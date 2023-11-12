'use client'

import { HeaderWelcome } from "@/app/_components/welcome/Header"
import { useSelector } from "react-redux"
import { createAccount } from "@/app/_lib/welcome/createAccount"
import { useState } from "react"
import { Loading } from "@/app/_components/welcome/loading"
import Link from "next/link"
import { FiArrowRightCircle, FiCheckCircle, FiXCircle, FiArrowLeftCircle } from "react-icons/fi"
import { signOut } from "next-auth/react"

const FinishAdminPage = () => {
  const [loading, setLoading] = useState(false)
  const [replaceInfo, setReplaceInfo] = useState(false)
  const [resOk, setResOk] = useState(false)
  const data = useSelector((state: any) => state.adminWelcome.data)

  async function handleConfirm() {
    setLoading(true)
    const res = await createAccount(data.type, data.commercialName, data.rut, data.alias, data.address)

    if (res.status === 201) setResOk(true)
    if (res.status === 400 || res.status === 500) setResOk(false)

    setReplaceInfo(true)
    setLoading(false)

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
                  <HeaderWelcome title='Todo bien' description='Su empresa se registró con éxito en nuestro sistema, haga click en el botón aquí abajo para ir al Dashboard' />
                  <button onClick={() => signOut()} className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 ease-in-out flex flex-row gap-2 items-center justify-center text-lg max-w-fit mx-auto'>Ir al dashboard <FiArrowRightCircle /></button>
                </>
              ) : (
                <>
                  <FiXCircle className='text-red-500 text-9xl mx-auto' />
                  <HeaderWelcome title='Ocurrió un error' description="Ocurrió un error de nuestra parte, por favor intente registrar su empresa más tarde." />
                  <Link href='/dashboard/welcome' className='bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 ease-in-out flex flex-row gap-2 items-center justify-center text-lg max-w-fit mx-auto'>Volver a intentar <FiArrowLeftCircle /></Link>
                </>
              )
            }
          </>
        ) : (
          <>
            <HeaderWelcome title='Este es un resumen de tu cuenta'
              description='Revise cuidadosamente la información, para finalizar la configuración presione el botón CONFIRMAR.' href='/dashboard/welcome/select-account/admin' />
            <ul className='px-8 flex flex-col gap-3'>
              <li className='flex flex-row gap-2 items-center'>
                <p className='font-semibold'>Tipo de cuenta:</p>
                <span>{data.type === 0 ? 'Administrativa' : 'Colaborador'}</span>
              </li>
              <li className='flex flex-row gap-2 items-center'>
                <p className='font-semibold'>Nombre comercial:</p>
                <span>{data.commercialName}</span>
              </li>
              <li className='flex flex-row gap-2 items-center'>
                <p className='font-semibold'>RUT empresa y/o sociedad:</p>
                <span>{data.rut}</span>
              </li>
              <li className='flex flex-row gap-2 items-center'>
                <p className='font-semibold'>Alias preferido:</p>
                <span>{data.alias === '' ? 'No seleccionado' : data.alias}</span>
              </li>
              <li className='flex flex-row gap-2 items-center'>
                <p className='font-semibold'>Dirección</p>
                <span>{data.address}</span>
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

export default FinishAdminPage