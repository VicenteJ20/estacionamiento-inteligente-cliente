import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import LayoutParking from "@/app/_components/dashboard/parking-place/layout"

const ParkingPlaceHome = () => {
  return (
    <section className='max-w-full'>
      <HeaderDashboard overtitle='Dashboad / lugares ' title='Gestionar lugares de estacionamiento' description='Aquí podrá gestionar lugares de estacionamiento de forma manual, por ejemplo, su estacionamiento en Curicó y otro perteneciente a la misma empresa pero esta vez en Rancagua, entre otras acciones de utilidad.' />
      <LayoutParking />
    </section>
  )
}

export default ParkingPlaceHome