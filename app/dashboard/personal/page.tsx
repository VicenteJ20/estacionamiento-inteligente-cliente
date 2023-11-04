import { FiltersPersonal } from "@/app/_components/dashboard/FiltersPersonal"
import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import { PersonalLayout } from "@/app/_components/dashboard/PersonalLayout"

const PersonalHomePage = () => {
  return (
    <section className='flex flex-col gap-6'>
      <HeaderDashboard title='Gestión de personal' overtitle={'Dashboard / personal'} />
      <FiltersPersonal />
      <PersonalLayout />
    </section>
  )
}

export default PersonalHomePage