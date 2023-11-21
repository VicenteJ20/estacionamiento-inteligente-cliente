import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import { ParkingPlaceSelector } from "@/app/_components/dashboard/areas/ParkingPlaceSelector"
import { DynamicLayoutArea } from "@/app/_components/dashboard/areas/DynamicLayoutArea"

const AreasHomePage = () => {
  return (
    <section className='flex flex-col gap-4'>
      <section className='flex flex-row gap-4 justify-between items-center'>
        <HeaderDashboard title='Gestionar áreas' overtitle="Dashboard / areas" />
        <ParkingPlaceSelector />
      </section>
      <DynamicLayoutArea />
    </section>
  )
}

export default AreasHomePage