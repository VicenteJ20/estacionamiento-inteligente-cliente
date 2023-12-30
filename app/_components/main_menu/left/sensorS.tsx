"use client"
import { useEffect, useState, useRef } from "react";
import Locations from "../../../_components/main_menu/left/locations"
import Sede from "../../../_components/main_menu/left/sede"

import Status from "../../../_components/main_menu/right/status"
import Record from "../../../_components/main_menu/right/record"
import Support from "../../../_components/main_menu/right/support"
import CarDiv from "../../../_components/main_menu/left/parking"

import { FaLocationDot } from "react-icons/fa6";

import { BiSupport } from "react-icons/bi";
import { LuHelpCircle } from "react-icons/lu";
import { MdOutlineNotificationsOff } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiAlertTriangle } from "react-icons/fi";
import { time } from "console";

export const SensoresClientes = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [datosTarjeta, setData] = useState([]) as any
    //const [error, setError] = useState("");

    const fetchTrigger = useRef(false);

    useEffect(()=> {

      async function fetchStop(){

        
        fetch(`/api/datos-uso`,{
          method:"GET",
          headers:{   contentType: "application/JSON"}})
      .then(async (res) => {
          const X = await res.json();
          setData([X.data])
          console.log(X.data)
      })
      .catch((e) => {
          // Se deja un error como el 400 o 404 o que se yo -R
          if (e instanceof Error) {
            setError(e.message);
          }
        })
        .finally(() => {
          // dejamos la función de carga en falso al terminar el fetch -R
          setLoading(false);
        });  

      }

      //if (!fetchTrigger.current){
        setTimeout(()=>{fetchStop();},5000
        )
        fetchTrigger.current= true;
      //}

    }, [datosTarjeta])
    return (
        <div className="grid grid-cols-6 gap-1">

      <div className="col-span-4 p-3">
        <div className="col-span-4 grid grid-cols-2 gap-1">
          <h6 className="me-auto col-span-2">Dashboard / Menú principal</h6>
          <h1 className="font-bold text-2xl col-span-2">Menú Principal</h1>

          <Sede icon={<FaLocationDot />} sede="Sede 01, Curicó Maule, Chile" />

        </div>

        <div className="col-span-4 grid grid-cols-3 gap-1 bg-white shadow-md border-inherit border-1.5 p-2 my-4 rounded-md">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-3"></div>
{
    datosTarjeta && datosTarjeta.length>0 && (
        <CarDiv id={datosTarjeta[0].ultimoCambioT.Id} status={"T"}/>
    )
}
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
            <CarDiv id={"asA-srs1"} status={"F"}/>
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
            <CarDiv id={"asA-srs3"} status={"F"}/>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs4"} status={"F"}/>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs5"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asD-srs1"} status={"F"}/>
            <CarDiv id={"asD-srs2"} status={"F"}/>
            <CarDiv id={"asD-srs3"} status={"F"}/>
            <CarDiv id={"asD-srs4"} status={"F"}/>
            <CarDiv id={"asD-srs5"} status={"F"}/>
            <CarDiv id={"asD-srs6"} status={"F"}/>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs6"} status={"F"}/>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs7"} status={"F"}/>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs8"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asD-srs7"} status={"F"}/>
            <CarDiv id={"asD-srs8"} status={"F"}/>
            <CarDiv id={"asD-srs9"} status={"F"}/>
            <CarDiv id={"asD-srs10"} status={"F"}/>
            <CarDiv id={"asD-srs11"} status={"F"}/>
            <CarDiv id={"asD-srs12"} status={"F"}/>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs9"} status={"F"}/>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs10"} status={"F"}/>
            <div className="col-span-9"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs11"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asA-srs12"} status={"F"}/>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs13"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asA-srs14"} status={"F"}/>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs15"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asA-srs16"} status={"F"}/>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs17"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asA-srs18"} status={"F"}/>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs19"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asA-srs20"} status={"F"}/>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs21"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asA-srs22"} status={"F"}/>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs23"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asA-srs24"} status={"F"}/>
            <div className="col-span-5"></div>

            <div className="col-span-2"></div>
            <CarDiv id={"asA-srs25"} status={"F"}/>
            <div className="col-span-3"></div>
            <CarDiv id={"asA-srs26"} status={"F"}/>
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

            <CarDiv id={"asD-srs13"} status={"F"}/>
            <CarDiv id={"asD-srs14"} status={"F"}/>
            <CarDiv id={"asD-srs15"} status={"F"}/>
            <CarDiv id={"asD-srs16"} status={"F"}/>
            <CarDiv id={"asD-srs17"} status={"F"}/>
            <CarDiv id={"asD-srs18"} status={"F"}/>
            <CarDiv id={"asD-srs19"} status={"F"}/>
            <CarDiv id={"asD-srs20"} status={"F"}/>
            <CarDiv id={"asD-srs21"} status={"F"}/>
            <CarDiv id={"asD-srs22"} status={"F"}/>
            <CarDiv id={"asD-srs23"} status={"F"}/>
            <CarDiv id={"asD-srs24"} status={"F"}/>

            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <CarDiv id={"asD-srs25"} status={"F"}/>
            <CarDiv id={"asD-srs26"} status={"F"}/>
            <CarDiv id={"asD-srs27"} status={"F"}/>
            <CarDiv id={"asD-srs28"} status={"F"}/>
            <CarDiv id={"asD-srs29"} status={"F"}/>
            <CarDiv id={"asD-srs30"} status={"F"}/>
            <CarDiv id={"asD-srs31"} status={"F"}/>
            <CarDiv id={"asD-srs32"} status={"F"}/>
            <CarDiv id={"asD-srs33"} status={"F"}/>
            <CarDiv id={"asD-srs34"} status={"F"}/>
            <CarDiv id={"asD-srs35"} status={"F"}/>
            <CarDiv id={"asD-srs36"} status={"F"}/>

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
            <CarDiv id={"asA-srs27"} status={"F"}/>
            <CarDiv id={"asA-srs28"} status={"F"}/>
            <CarDiv id={"asA-srs29"} status={"F"}/>
            <CarDiv id={"asA-srs30"} status={"F"}/>
            <CarDiv id={"asA-srs31"} status={"F"}/>
            <CarDiv id={"asA-srs32"} status={"F"}/>

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
            <CarDiv id={"asV-srs1"} status={"F"}/>
            <CarDiv id={"asV-srs2"} status={"F"}/>
            <div className="col-span-3"></div>


            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <CarDiv id={"asD-srs37"} status={"F"}/>
            <CarDiv id={"asD-srs38"} status={"F"}/>
            <CarDiv id={"asD-srs39"} status={"F"}/>
            <CarDiv id={"asD-srs40"} status={"F"}/>
            <CarDiv id={"asD-srs41"} status={"F"}/>
            <CarDiv id={"asD-srs42"} status={"F"}/>
            <CarDiv id={"asD-srs43"} status={"F"}/>
            <CarDiv id={"asD-srs44"} status={"F"}/>
            <CarDiv id={"asD-srs45"} status={"F"}/>
            <div className="col-span-3"></div>


            <div className="h-5 w-5 col-span-12"></div>

            <div className="h-5 w-5 col-span-12"></div>

            <CarDiv id={"asD-srs46"} status={"F"}/>
            <CarDiv id={"asD-srs47"} status={"F"}/>
            <CarDiv id={"asD-srs48"} status={"F"}/>
            <CarDiv id={"asD-srs49"} status={"F"}/>
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


        <Support title="Visitar FAQ" icon={<LuHelpCircle />} onClickRedirectUrl="https://discord.gg/T4qsUu85D8" />
        <Support title="Solicitar soporte" icon={<BiSupport />} onClickRedirectUrl="https://discord.gg/T4qsUu85D8" />

      </div>
    </div>
    )
}


