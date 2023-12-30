'use client'
import { useEffect, useState, useRef } from "react";
const TarjetaDeUso = () => {
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

      }

      if (!fetchTrigger.current){
        fetchStop();
        fetchTrigger.current= true;
      }

    })


    const errorComponent = <div className="text-red-500">Error: {error}</div>;
    //datosTarjeta.ultimoCambioF  datosTarjeta.ultimoCambioT
    //console.log(datosTarjeta)

          // contenido cortado //
    // <div className="/*bg-green-500*/ col-1 text-center border-1 border-gray-300 rounded-lg"> <p> Última entrada:</p> {}</div> 
    // <div className="/*bg-red-500*/ col-1 text-center border-1 border-gray-300 rounded-lg"> <p> Última salida:</p> {}</div>
    
    return (
      <div className="mx-auto max-w-2xl">
          <h1 className="text-center text-2xl font-bold">Estado actual</h1>
          <div className="bg-white shadow-md border-inherit border-1">
              <h1 className="bg-gray-950 text-white font-bold text-center  border-x-1 p-2">Espacios disponibles</h1>
              <div className="grid grid-cols-1 md:grid-cols-3">

                  <div className="border h-unit-4xl p-1 text-center pt-5">
                      <h5 className="text-2xl text-red-500 font-bold"><p>{datosTarjeta.sumaSensoresADM}</p></h5>
                      <h5>/32</h5>
                      <h1>administrativos</h1>
                  </div>
                  <div className="border-1 border-inherit h-unit-4xl p-1 text-center pt-5">
                      <h5 className="text-2xl text-yellow-500 font-bold">{datosTarjeta.sumaSensoresILM}</h5>
                      <h5>/49</h5>
                      <h1>docentes</h1>
                  </div>
                  <div className="border-1 border-inherit h-unit-4xl p-1 text-center pt-5">
                      <h5 className="text-2xl text-blue-500 font-bold">{datosTarjeta.sumaSensoresALM}</h5>
                      <h5>/54</h5>
                      <h1>estudiantes</h1>
                  </div>

                  <div className="border-1 border-inherit col-span-3 h-unit-2xl flex p-3">
                      <h5 className="ms-0">visitas</h5>
                      <h5 className="ms-auto"> <span className="text-2xl text-green-500 font-bold">0</span>/2</h5>
                  </div>
                  <div className="border-x col-span-3 h-unit-2xl flex p-3">
                      <h5 className="ms-0">discapacidad</h5>
                      <h5 className="ms-auto"> <span className="text-2xl text-gray-500 font-bold">0</span>/4</h5>
                  </div>

              </div>
          </div>
      </div>
  );

};
export default TarjetaDeUso;