'use client'
import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import { Avatar } from "@nextui-org/react"

export const RequestPage = (infoUser: any) => {
  if (infoUser && infoUser.infoUser && infoUser.infoUser.length > 0) {
    return (
      <section>
        <div  className='flex flex-col gap-8'>
          <HeaderDashboard overtitle={`Dashboard / personal / info / ${infoUser.infoUser[0].id}`} title={`Registro de solicitud de acceso `} description='Tenga cuidado con las personas que acepta que se unan a su organización y el nivel de acceso que tenga mediante el rol' />
          <h3 className='text-xl font-semibold text-blue-900'>Datos del solicitante</h3>
          <article className='flex flex-col gap-4'>
            <Avatar src={infoUser.infoUser[0].image ? infoUser.infoUser[0].image : 'https://i.pravatar.cc/150' } size='lg' radius='none' className='w-40 h-40' isBordered={true} color='default' />
            <form className='flex flex-col gap-4 max-w-6xl'>
              <label className='flex flex-col gap-2'>
                <span className='text-lg text-blue-800 font-medium'>Nombre</span>
                <input type='text' readOnly value={infoUser.infoUser[0].name} className='w-full border border-gray-300 rounded-sm p-3 outline-none text-zinc-500' />
              </label>
              <label className='flex flex-col gap-2'>
                <span className='text-lg text-blue-800 font-medium'>Email</span>
                <input type='email' readOnly value={infoUser.infoUser[0].email} className='w-full border border-gray-300 rounded-sm p-3 outline-none text-zinc-500' />
              </label>
              <label className='flex flex-col gap-2'>
                <span className='text-lg text-blue-800 font-medium'>Mensaje personalizado:</span>
                <textarea readOnly value={infoUser.infoUser[0].name} className='w-full border border-gray-300 rounded-sm p-3 outline-none text-zinc-500 resize-none' />
              </label>
            </form>
          </article>
        </div>
      </section>
    )
  } else {
    return null
  }
}