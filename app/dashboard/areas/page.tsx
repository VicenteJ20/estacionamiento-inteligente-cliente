import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import HighlightCard from "@/app/_components/dashboard/areas/HighlightCard"
import { ParkingPlaceSelector } from "@/app/_components/dashboard/areas/ParkingPlaceSelector"

const AreasHomePage = () => {
  return (
    <section className='flex flex-col gap-4'>
      <section className='flex flex-row gap-4 justify-between items-center'>
        <HeaderDashboard title='Gestionar áreas' overtitle="Dashboard / areas" />
        <ParkingPlaceSelector />
      </section>
      <HighlightCard />
    </section>
  )
}

export default AreasHomePage