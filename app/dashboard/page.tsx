import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { SensoresClientes } from "../_components/main_menu/left/sensorS"




const DashboardHomePage = async () => {

  const session = await getServerSession(authOptions) as any

  if (!session.user.role && !session.user.accountType) return redirect('/dashboard/welcome')
// en los sensores 
// asE es area de estudiantes color azul
// asA es area de adm color rojo
// asD     ---   area de docentes color amarillo
// asV es area de visitas color verde 
// asM es area de minusvalidos color gris
  return (
    <SensoresClientes/>
  )
}

export default DashboardHomePage