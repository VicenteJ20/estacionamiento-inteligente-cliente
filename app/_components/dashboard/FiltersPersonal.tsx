'use client'

export const FiltersPersonal = () => {
  return (
    <form className='flex flex-row gap-4 w-full'>
      <label className='flex flex-col gap-2 font-medium w-full'>
        Nombre
        <input type='text' placeholder='Nombre' className='border border-zinc-300 px-4 py-2 rounded-md' />
      </label>
      <label className='flex flex-col gap-2 font-medium w-full'>
        RUT
        <input type='text' placeholder='Rut' className='border border-zinc-300 px-4 py-2 rounded-md' />
      </label>
      <label className='flex flex-col gap-2 font-medium w-full'>
        Correo electrónico
        <input type='text' placeholder='ej: ejemplo@gmail.com' className='border border-zinc-300 px-4 py-2 rounded-md' />
      </label>
      <label className='flex flex-col gap-2 font-medium w-full'>
        Rol
        <input type='text' placeholder='rol' className='border border-zinc-300 px-4 py-2 rounded-md' />
      </label>
      <div className='flex flex-row gap-2 items-end'>
        <button className='bg-blue-500 text-white font-semibold px-4 py-2 border border-blue-500 rounded-md hover:bg-blue-700 transition-all duration-300'>Buscar</button>
        <button className='px-4 py-2 rounded-md hover:bg-red-500 hover:text-white text-red-700 transition-all duration-300 border border-red-500'>Reiniciar</button>
      </div>
    </form>
  )
}