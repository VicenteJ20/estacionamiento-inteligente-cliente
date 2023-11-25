'use client'
import { BarChart, Bar, XAxis , YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { useEffect, useState } from "react";


const  RechartsGrafico = () => {
    /**const datosEstacionamiento = [
        {
            fecha : "xx/xx/xx",
            total : "100"
        },
        {
            fecha : "xx/xx/xx",
            total : "150"
        },
        {
            fecha : "xx/xx/xx",
            total : "450"
        },
        {
            fecha : "xx/xx/xx",
            total : "200"
        },
        {
            fecha : "xx/xx/xx",
            total : "144"
        },
        {
            fecha : "xx/xx/xx",
            total : "230"
        }] */


        const [data1, setData] = useState([]) as any
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState("");


        useEffect(() => {
            // Se deja el loading en true mientras se hace el fetch -R
            setLoading(true);
            //IMPORTANTE, especificar la api que muestre los datos del sensor
            fetch(`http://localhost:4040/data/`,{
            method:"GET",
            headers:{
                contentType: "application/JSON"
            }
        
            })
              .then(async (res) => {
                // se hace el set de la data si todo sale bien... -R
                const todo = await res.json();
        
                setData(todo);
        
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
          }, []);
        

    const errorComponent = <div className="text-red-500">Error: {error}</div>;

    console.log(data1)
    return (
        <div className="p-24">
      {loading ? (
        <></>
      ) : error ? (
        errorComponent
      ) : (
        <div className=""> 
            <h1 className="text-center">  Cantidad de Registros (últimos 7 días) </h1>
        <BarChart id="datosSemana" width={600} height={300} data={data1}>
            <XAxis dataKey="fecha" />
            <YAxis/>
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#8884d8" minPointSize={5} > </Bar>
            <CartesianGrid strokeDasharray="3 3"/>
        </BarChart>
        </div>
      )}
    </div>
    );
};

export default RechartsGrafico;