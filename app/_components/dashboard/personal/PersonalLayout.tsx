import TablePersonal from "./Table"
import { TableRequests } from "./TableRequests"
export const PersonalLayout = () => {
  return (
    <section className='min-h-full grid grid-cols-4 gap-4 w-full pr-12'>
      <div className='col-span-3 flex flex-col gap-4'>
        <h2 className='text-lg font-semibold text-blue-900'>Personal de la empresa</h2>
        <TablePersonal />
      </div>
      <div className='flex flex-col gap-4 grid-cols-1'>
        <h2 className='text-lg font-semibold text-blue-900'>Solicitudes pendientes</h2>
        <TableRequests />
      </div>
    </section>
  )
}