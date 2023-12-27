'use client'
import { useEffect, useState } from "react";


const TarjetaDeUso = () => {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [datosTarjeta, setData] = useState([]) as any
    //const [error, setError] = useState("");

    useEffect(()=> {
        fetch(`/api/datosUso`,{
            method:"GET",
            headers:{   contentType: "application/JSON"}})
        .then(async (res) => {
            const X = await res.json();
            setData(X.data)
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
        
        console.log(datosTarjeta)
    })
    const errorComponent = <div className="text-red-500">Error: {error}</div>;

    console.log(datosTarjeta)
    return (
        <div className="">
      {loading ? (
        <></>
      ) : error ? (
        errorComponent
      ) : (
        <div className="">
            <div id="tarjetaUso" className=" grid grid-cols-5 gap-3 max-w-4xl m-5  /*bg-slate-500*/ h-1/4 z-0 text-lg items-center ">
            <div className="/*bg-green-500*/ col-1 text-center border-1 border-gray-300 rounded-lg"> <p> Última entrada:</p> {datosTarjeta.ultimoCambioF}</div>
            <div className="/*bg-red-500*/ col-1 text-center border-1 border-gray-300 rounded-lg"> <p> Última salida:</p> {datosTarjeta.ultimoCambioT}</div>
            <div className="/*bg-blue-500*/ col-1 text-center border-1 border-gray-300 rounded-lg"> <p>Registros totales:</p> {datosTarjeta.sumaSensoresHoy}</div>
            <div className="/*bg-cyan-500*/ col-2 col-span-2 content-center border-1 border-gray-300 rounded-lg">

                <div className="grid grid-rows-2">
                <div className="row-1 text-center"> Registros por área:  </div>
                <div className="row-1 text-center"> <p>{datosTarjeta.sumaSensoresADM} / {datosTarjeta.sumaSensoresALM} / {datosTarjeta.sumaSensoresILM}</p>  </div>

                </div>
            </div>
        </div>
        </div>
      )}
    </div>
    );
};



export default TarjetaDeUso;