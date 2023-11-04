'use client'

import { RequestPersonal } from "./RequestsPersonal"

export const PersonalLayout = () => {
  return (
    <section className="w-full flex flex-row gap-3">
      <table className='table-auto border border-zinc-400 w-full'>
        <thead className="h-fit">
          <tr className="h-[3rem]">
            <th colSpan={5} className='text-start px-4 py-2 text-white bg-blue-800'>Listado del personal</th>
          </tr>
          <tr className="h-[3rem]">
            <th className='text-start px-4 py-1'>Nombre</th>
            <th className='text-start px-4 py-1'>Correo electrónico</th>
            <th className='text-start px-4 py-1'>Rol</th>
          </tr>
        </thead>
      </table>
      <RequestPersonal />
    </section>
  )
}