import { FiltersPersonal } from "@/app/_components/dashboard/FiltersPersonal"
import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import { PersonalLayout } from "@/app/_components/dashboard/personal/PersonalLayout"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Gestión de personal',
    description: 'En esta sección podrá administrar el personal asociado con su empresa o negocio en la plataforma de Smartparking, también podrá aceptar o rechazar solicitudes de nuevas cuentas de colaboradores que hayan solicitado unirse a su equipo.'
  }
}


const PersonalHomePage = () => {
  return (
    <>
      <section className='flex flex-col gap-6 mb-8 w-full'>
        <HeaderDashboard title='Gestión de personal' overtitle={'Dashboard / personal'} />
      </section>
      <PersonalLayout />
    </>
  )
}

export default PersonalHomePage