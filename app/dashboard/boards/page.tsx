import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import LayoutBoards from "@/app/_components/dashboard/boards/layout"

const BoardsHomePage = () => {
  return (
    <>
      <HeaderDashboard overtitle='Dashboard / boards' title='Administración de placas' description='Aquí podrá administrar las placas arduino con sensores, permitiendo agregar nuevas, editar su información y asignar estas a un área en específico.' />
      <LayoutBoards />
    </>
  )
}

export default BoardsHomePage