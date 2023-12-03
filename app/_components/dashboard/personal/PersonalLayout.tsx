import TablePersonal from "./Table"
import { TableRequests } from "./TableRequests"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export const PersonalLayout = async () => {
  const session = await getServerSession(authOptions) as any
  return (
    <section className='min-h-full grid grid-cols-4 gap-4 w-full pr-12'>
      <div className='col-span-3 flex flex-col gap-4'>
        <h2 className='text-lg font-semibold text-blue-900'>Personal de la empresa</h2>
        <TablePersonal enterprise={session?.user?.enterprise} />
      </div>
      <div className='flex flex-col gap-4 grid-cols-1'>
        <h2 className='text-lg font-semibold text-blue-900'>Solicitudes pendientes</h2>
        <TableRequests />
      </div>
    </section>
  )
}