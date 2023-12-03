import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import { NewBoardForm } from "@/app/_components/dashboard/boards/NewBoard"

const AddBoardPlace = () => {
  return (
    <section>
      <HeaderDashboard title='Registrar nueva placa' description='En esta sección usted podrá agregar una nueva placa al área que seleccione, esta placa puede ser modificada más adelante para que cambiar su área' overtitle='Dashboard / boards / agregar'  />

      <NewBoardForm />
    </section>
  )
}

export default AddBoardPlace