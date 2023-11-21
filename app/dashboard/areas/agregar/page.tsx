import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import { AddAreaForm } from "@/app/_components/dashboard/areas/AddAreaForm"

const AgregarAreaPage = () => {
  return (
    <section className='w-full flex flex-col gap-4'>
      <HeaderDashboard title='Agregar nueva área' overtitle='Dashboard / areas / agregar' description='Aquí podrá agregar nuevas áreas al lugar de estacionamiento que haya seleccionado en el menú principal de las áreas' />
      <AddAreaForm />
    </section>
  )
}

export default AgregarAreaPage