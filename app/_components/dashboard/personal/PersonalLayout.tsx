import TablePersonal from "./Table"
import { TableRequests } from "./TableRequests"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export const PersonalLayout = async () => {
  const session = await getServerSession(authOptions) as any
  return (
    <div className='col-span-3 flex flex-col gap-4'>
      <h2 className='text-lg font-semibold text-blue-900'>Personal de la empresa</h2>
      <TablePersonal enterprise={session?.user?.enterprise} />
    </div>
  )
}