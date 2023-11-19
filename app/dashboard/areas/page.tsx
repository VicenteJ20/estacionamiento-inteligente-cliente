import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import HighlightCard from "@/app/_components/dashboard/areas/HighlightCard"

const AreasHomePage = () => {
  return (
    <section className='flex flex-col gap-4'>
      <HeaderDashboard title='Gestionar áreas' overtitle="Dashboard / areas" />
      <HighlightCard />
    </section>
  )
}

export default AreasHomePage