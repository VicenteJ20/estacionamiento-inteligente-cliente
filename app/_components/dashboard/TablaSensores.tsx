'use client'
import React, {useEffect, useState} from "react";

import InfiniteScroll from "react-infinite-scroll-component" //El componente es problemático, conviene cambiarlo en las siguientes iteraciones del proyecto... -R
import {Table ,TableHeader, TableBody, TableCell,Pagination, getKeyValue, TableColumn, TableRow} from "@nextui-org/react"
//Se anticipa la respuesta deseada de la API, en este caso se usa el tipeo del json de los sensores...  -R

type TodoResponse = {
  Id: string;
  Status: string;
  _ids: string;
};
const TablaSensores = () => {
  // crear las constantes para los datos, el estado de carga y el estado de error   -R
  const [data, setData] = useState([]) as any
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  

// se usa useEffect para cargar los datos antes del primer render de la vista para que el navegador no  ande cagando la paciencia -R
  useEffect(() => {
    // Se deja el loading en true mientras se hace el fetch -R
    setLoading(true);

    fetch(`http://localhost:4000/data/`,{
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

  // ahora se hace display del componente -R
  const loadingComponent = <div>Cargando...</div>;
  // display para el componente de error
  const errorComponent = <div className="text-red-500">Error: {error}</div>;

  


console.log(data) // <----Recomiendo descomentar esto al momento de testear la conexión con la APi de los sensores   -R
  // se hace un display acorde al useState -R

  return (
    <div className="p-24">
      {loading ? (
        loadingComponent
      ) : error ? (
        errorComponent
      ) : (
        <div>
          <p>Carga completa, mostrando datos del json...</p>
          <Table>
          <TableHeader>
          <TableColumn key="Id"> Id del sensor </TableColumn>
          <TableColumn key="Status"> Status actual del sensor </TableColumn>
          <TableColumn key="_ids"> Info </TableColumn>

          </TableHeader>
          <TableBody>
            {
                data && data.length > 0 && data.map((item: any, index: number) => (
                    <TableRow key={index++}>
                        <TableCell>
                            {item.Id}
                        </TableCell>
                        <TableCell>
                            {item.Status}
                        </TableCell>
                        <TableCell>
                            {item._ids}
                        </TableCell>
                    </TableRow>
                ))
            }
          </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default TablaSensores;