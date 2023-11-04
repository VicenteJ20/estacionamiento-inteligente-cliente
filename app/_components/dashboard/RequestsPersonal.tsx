'use client'
import { getCollaborators } from "@/app/_lib/welcome/checkRequest"
import { useEffect, useState } from "react"
import { FiEye, FiUser } from "react-icons/fi"

export const RequestPersonal = () => {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    async function fetchRequests() {
      const response = await getCollaborators()

      setRequests(response.data)
    }
    fetchRequests()
  }, [])

  return (
    <section className='border border-zinc-500 h-full w-[42rem]'>
      <header className="bg-gray-600 text-white border-b  border-zinc-500 px-5 py-3">
        <h2 className="font-semibold">Solicitudes pendientes</h2>
      </header>
      <div className="px-5 py-7 flex flex-col gap-2">
        {
          requests.length > 0 ? (
            requests.map((item: any) => (
              <div key={item.id} className='border border-zinc-400 p-2 rounded-md flex flex-row gap-2 items-center justify-between'>
                <div className='flex flex-row gap-2 items-center'>
                  <span className='border border-zinc-400 flex items-center text-2xl w-fit h-fit rounded-full p-2'><FiUser className='' /></span>
                  <div className='flex flex-col gap-1'>
                    <h3 className='font-semibold text-blue-950'>{item.name}</h3>
                    <p>{item.email}</p>
                  </div>
                </div>
                <ul>
                  <li>
                    <button className='bg-blue-500 text-white font-semibold text-xl p-2 border border-blue-500 rounded-md hover:bg-blue-700 transition-all duration-300'><FiEye /></button>
                  </li>
                </ul>
              </div>
            ))
          ) : (
            <h3>No hay nuevas solicitudes</h3>
          )
        }
      </div>
    </section>
  )
}