import { TableRequests } from "@/app/_components/dashboard/personal/TableRequests"
import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Solicitudes pendientes de personal',
    description: 'En esta sección podrá administras las solicitudes del nuevo personal que quiera unirse a su empresa o negocio en la plataforma de Smartparking.'
  }
}

const SolicitudesPendientesPage = () => {
  return (
    <>
      <section className='flex flex-col gap-6 mb-8 w-full'>
        <HeaderDashboard title='Solicitudes de nuevo personal' overtitle={'Dashboard / personal / solicitudes pendientes'} description='En esta sección encontrará las solicitudes pendientes de los nuevos colaboradores que quieran unirse a su dominio.' />
      </section>
      <div className='flex flex-col gap-4 grid-cols-1'>
        <h2 className='text-lg font-semibold text-blue-900'>Solicitudes pendientes</h2>
        <TableRequests />
      </div>
    </>
  )
}

export default SolicitudesPendientesPage