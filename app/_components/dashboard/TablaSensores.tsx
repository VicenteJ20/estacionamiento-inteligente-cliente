'use client'
import React, { useEffect, useState } from "react";

//import InfiniteScroll from "react-infinite-scroll-component" //El componente es problemático, conviene cambiarlo en las siguientes iteraciones del proyecto... -R
import { Table, TableHeader, TableBody, TableCell, TableColumn, TableRow, Spinner } from "@nextui-org/react";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
//import { useAsyncList } from 'react-stately';

const TablaSensores = () => {
  // crear las constantes para los datos, el estado de carga y el estado de error   -R
  const [data, setData] = useState([]) as any
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //const [isLoadingData, setIsLoading] = React.useState(true); // Descomentar al implementar paginación -R 
  const [hasMore, setHasMore] = React.useState(false);


  // se usa useEffect para cargar los datos antes del primer render de la vista para que el navegador no  ande cagando la paciencia -R
  useEffect(() => {
    // Se deja el loading en true mientras se hace el fetch -R
    setLoading(true);

    fetch(`http://localhost:4000/data/`, {
      method: "GET",
      headers: {
        contentType: "application/JSON"
      }

    })
      .then(async (res) => {
        // se hace el set de la data si todo sale bien... -R
        const todo = await res.json();
        setHasMore(todo.next !== null);
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
  //const loadingComponent = <div>Cargando...</div>;  //Esto solo lo usé para ver el estado de la carga del Json, descomentar en caso de querer monitorear algo... -R
  // display para el componente de error
  const errorComponent = <div className="text-red-500">Error: {error}</div>;




  //console.log(data) // <----Recomiendo descomentar esto al momento de testear la conexión con la APi de los sensores   -R
  // se hace un display acorde al useState -R
  const [loaderRef, scrollerRef] = useInfiniteScroll({ hasMore, onLoadMore: data.loadMore });
  return (
    <div className="p-24">
      {loading ? (
        <></>
      ) : error ? (
        errorComponent
      ) : (
        <div>

          <Table
            isHeaderSticky
            aria-label="Example table with infinite pagination"
            baseRef={scrollerRef}
            bottomContent={
              hasMore ? (
                <div className="flex w-full justify-center">
                  <Spinner ref={loaderRef} color="white" />
                </div>
              ) : null
            }
            classNames={{
              base: "max-h-[520px] overflow-scroll",
              table: "min-h-[400px]",
            }}
          >
            <TableHeader>
              <TableColumn key="Id"> Id del sensor </TableColumn>
              <TableColumn key="Status"> Status actual del sensor </TableColumn>
              <TableColumn key="_ids"> Info </TableColumn>

            </TableHeader>
            <TableBody
              /**isLoading={isLoadingData} */
              items={data.items}
              loadingContent={<Spinner color="white" />}
            >
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