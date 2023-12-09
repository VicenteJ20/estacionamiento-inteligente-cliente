import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

import Locations from "../_components/main_menu/left/locations"
import Sede from "../_components/main_menu/left/sede"

import Status from "../_components/main_menu/right/status"
import Record from "../_components/main_menu/right/record"
import Support from "../_components/main_menu/right/support"

import { FaLocationDot } from "react-icons/fa6";

import { BiSupport } from "react-icons/bi";
import { LuHelpCircle } from "react-icons/lu";
import { MdOutlineNotificationsOff } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiAlertTriangle } from "react-icons/fi";





const DashboardHomePage = async () => {

  const session = await getServerSession(authOptions) as any

  if (!session.user.role && !session.user.accountType) return redirect('/dashboard/welcome')

  return (

    <div className="grid grid-cols-6 gap-1">

      <div className="col-span-4 p-3">
        <div className="col-span-4 grid grid-cols-2 gap-1">
          <h6 className="me-auto col-span-2">Dashboard / Menú principal</h6>
          <h1 className="font-bold text-2xl col-span-2">Menú Principal</h1>

          <Sede icon={<FaLocationDot />} sede="Sede 01, Curicó Maule, Chile" />

        </div>

        <div className="col-span-4 grid grid-cols-3 gap-1 border-2 border-slate-900 p-2 my-4 rounded-lg">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-3"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>

            <div className="col-span-2"></div>
            <div className="bg-blue-200 h-5 w-5"> </div>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-3"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>

            <div className="col-span-2"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-3"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>

            <div className="col-span-2"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-3"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>

            <div className="col-span-2"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-3"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-3"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-3"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-3"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-3"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-3"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-3"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-3"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="col-span-5"></div>
          </div>
          <div className="grid grid-cols-12 gap-1">
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>
          </div>
          <div className="grid grid-cols-12 gap-1">
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="bg-red-200 h-5 w-5"></div>
            <div className="bg-red-200 h-5 w-5"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-blue-200 h-5 w-5"></div>
            <div className="bg-green-200 h-5 w-5"></div>
            <div className="bg-green-200 h-5 w-5"></div>
            <div className="col-span-3"></div>


            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="col-span-3"></div>


            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-yellow-200 h-5 w-5"></div>
            <div className="bg-gray-300 h-5 w-5"></div>
            <div className="bg-gray-300 h-5 w-5"></div>
            <div className="bg-gray-300 h-5 w-5"></div>
            <div className="bg-gray-300 h-5 w-5"></div>
            <div className="col-span-4"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>


          </div>
        </div>


        <h1 className="font-bold text-2xl col-span-2">Ubicaciones disponibles</h1>
        <Locations
          id="A1-S3"
          area="A1-Estudiantes"
          registro="Justo ahora"
          placa="BT-RT-90"
          acciones={['copi', 'edit', 'view', 'delete']}
        />
        

      </div>



      <div className="col-span-2 flex-row items-center p-2">
        <h5 className="text-center">Dashboard / estadisticas</h5>
        <Status></Status>

        <h1 className="text-center text-2xl font-bold my-2">Registro de estado</h1>
        <Record titulo="Sensores" parrafo="Los sensores funcionan con normalidad, no se requiere acciones" icon={<FaRegCircleCheck />} iconColorClass="text-green-500" />
        <Record titulo="Conexión con el servicio" parrafo="la conexión con el servidor puede ser inestable. Le recomendamos revisar su conexion a internet." icon={<FiAlertTriangle />} iconColorClass="text-yellow-500" />
        <Record titulo="Notificaciones" parrafo="Todo tranquilo por aqui, no hay nuevos mensajes" icon={<MdOutlineNotificationsOff />} iconColorClass="text-black" />

        <h1 className="text-center text-2xl font-bold my-2">  Soporte y ayuda</h1>

        <Support title="Visitar FAQ" icon={<LuHelpCircle />} iconColorClass="text-black" />
        <Support title="Solicitar soporte" icon={<BiSupport />} iconColorClass="text-black" />


      </div>
    </div>


  )
}

export default DashboardHomePage