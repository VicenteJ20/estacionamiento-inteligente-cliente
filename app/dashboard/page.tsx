import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

import Locations from "../_components/main_menu/left/locations"
import Sede from "../_components/main_menu/left/sede"

import Status from "../_components/main_menu/right/status"
import Record from "../_components/main_menu/right/record"
import Support from "../_components/main_menu/right/support"
import CarDiv from "../_components/main_menu/left/parking"

import { FaLocationDot } from "react-icons/fa6";

import { BiSupport } from "react-icons/bi";
import { LuHelpCircle } from "react-icons/lu";
import { MdOutlineNotificationsOff } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiAlertTriangle } from "react-icons/fi";


const DashboardHomePage = async () => {

  const session = await getServerSession(authOptions) as any

  if (!session.user.role && !session.user.accountType) return redirect('/dashboard/welcome')
// en los sensores 
// asE es area de estudiantes color azul
// asA es area de adm color rojo
// asD area de docentes color amarillo
// asV es area de visitas color verde 
// asM es area de minusvalidos color gris
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
            <CarDiv id={"asE-srs1"} status={"F"}/>
            <CarDiv id={"asE-srs2"} status={"F"}/>
            <CarDiv id={"asE-srs3"} status={"F"}/>
            <CarDiv id={"asE-srs4"} status={"F"}/>
            <CarDiv id={"asE-srs5"} status={"F"}/>
            <CarDiv id={"asE-srs6"} status={"F"}/>
            <CarDiv id={"asE-srs7"} status={"F"}/>
            <CarDiv id={"asE-srs8"} status={"F"}/>
            <CarDiv id={"asE-srs9"} status={"F"}/>

            <div className="col-span-2"></div>
            <CarDiv id={"asE-srs10"} status={"F"}/>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asE-srs11"} status={"F"}/>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asE-srs12"} status={"F"}/>
            <CarDiv id={"asE-srs13"} status={"F"}/>
            <CarDiv id={"asE-srs14"} status={"F"}/>
            <CarDiv id={"asE-srs15"} status={"F"}/>
            <CarDiv id={"asE-srs16"} status={"F"}/>
            <CarDiv id={"asE-srs17"} status={"F"}/>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <div className="col-span-5"></div>
          </div>
          <div className="grid grid-cols-12 gap-1">
            <CarDiv id={"asE-srs18"} status={"F"}/>
            <CarDiv id={"asE-srs19"} status={"F"}/>
            <CarDiv id={"asE-srs20"} status={"F"}/>
            <CarDiv id={"asE-srs21"} status={"F"}/>
            <CarDiv id={"asE-srs22"} status={"F"}/>
            <CarDiv id={"asE-srs23"} status={"F"}/>
            <CarDiv id={"asE-srs24"} status={"F"}/>
            <CarDiv id={"asE-srs25"} status={"F"}/>
            <CarDiv id={"asE-srs26"} status={"F"}/>
            <CarDiv id={"asE-srs27"} status={"F"}/>
            <CarDiv id={"asE-srs28"} status={"F"}/>
            <CarDiv id={"asE-srs29"} status={"F"}/>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <CarDiv id={"asE-srs30"} status={"F"}/>
            <CarDiv id={"asE-srs31"} status={"F"}/>
            <CarDiv id={"asE-srs32"} status={"F"}/>
            <CarDiv id={"asE-srs33"} status={"F"}/>
            <CarDiv id={"asE-srs34"} status={"F"}/>
            <CarDiv id={"asE-srs35"} status={"F"}/>
            <CarDiv id={"asE-srs36"} status={"F"}/>
            <CarDiv id={"asE-srs37"} status={"F"}/>
            <CarDiv id={"asE-srs38"} status={"F"}/>
            <CarDiv id={"asE-srs39"} status={"F"}/>
            <CarDiv id={"asE-srs40"} status={"F"}/>
            <CarDiv id={"asE-srs41"} status={"F"}/>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>

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
            <CarDiv id={"asE-srs42"} status={"F"}/>
            <CarDiv id={"asE-srs43"} status={"F"}/>
            <CarDiv id={"asE-srs44"} status={"F"}/>
            <CarDiv id={"asE-srs45"} status={"F"}/>
            <CarDiv id={"asE-srs46"} status={"F"}/>
            <CarDiv id={"asE-srs47"} status={"F"}/>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <CarDiv id={"asA-srs2"} status={"F"}/>
            <CarDiv id={"asA-srs2"} status={"F"}/>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <CarDiv id={"asE-srs48"} status={"F"}/>
            <CarDiv id={"asE-srs49"} status={"F"}/>
            <CarDiv id={"asE-srs50"} status={"F"}/>
            <CarDiv id={"asE-srs51"} status={"F"}/>
            <CarDiv id={"asE-srs52"} status={"F"}/>
            <CarDiv id={"asE-srs53"} status={"F"}/>
            <CarDiv id={"asE-srs54"} status={"F"}/>
            <CarDiv id={"asV-srs2"} status={"F"}/>
            <CarDiv id={"asV-srs2"} status={"F"}/>
            <div className="col-span-3"></div>


            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <div className="col-span-3"></div>


            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asM-srs1"} status={"F"}/>
            <CarDiv id={"asM-srs2"} status={"F"}/>
            <CarDiv id={"asM-srs3"} status={"F"}/>
            <CarDiv id={"asM-srs4"} status={"F"}/>
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